import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '@/store/authStore';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
})

let isRefreshing = false;
let failedQueue: {
    resolve: (token: string | null) => void;
    reject: (error: AxiosError) => void;
}[] = [];

const processQueue = (error: AxiosError | null, token: string | null = null) => {
    for (const prom of failedQueue) {
        error ? prom.reject(error) : prom.resolve(token);
    }
    failedQueue = [];
};

api.interceptors.request.use((config) => {
    if (config.url?.includes('/auth/')) return config;

    const token = useAuthStore.getState().accessToken;
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
});

api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

        const shouldSkipRefresh =
            originalRequest?.url?.includes('/auth/') ||
            originalRequest?._retry ||
            error.response?.status !== 401;

        if (shouldSkipRefresh) return Promise.reject(error);

        if (isRefreshing) {
            return new Promise((resolve, reject) => {
                failedQueue.push({
                    resolve: (token) => {
                        if (token) originalRequest.headers.Authorization = `Bearer ${token}`;
                        resolve(api(originalRequest));
                    },
                    reject,
                });
            });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
            const response = await api.post('/auth/refresh');
            const newAccessToken = response.data.data.accessToken;

            useAuthStore.getState().setAccessToken(newAccessToken);
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            processQueue(null, newAccessToken);

            return api(originalRequest);
        } catch (refreshError) {
            processQueue(refreshError as AxiosError, null);
            useAuthStore.getState().clearUser();

            if (typeof window !== 'undefined') window.location.href = '/login';

            return Promise.reject(refreshError);
        } finally {
            isRefreshing = false;
        }
    }
);
