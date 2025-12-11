import axios from "axios";
import { useAuthStore } from "@/store/authStore";

// state global refresh queue
let isRefreshing = false;
let refreshQueue: Array<(token: string | null) => void> = [];

const processQueue = (token: string | null) => {
    refreshQueue.forEach((resolve) => {
        resolve(token);
    });
    refreshQueue = [];
};

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

// REQUEST INTERCEPTOR
api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().accessToken;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
    (res) => res,
    async (error) => {
        const original = error.config;

        if (error.response?.status === 401 && !original._retry) {
            original._retry = true;

            const { setAccessToken } = useAuthStore.getState();

            if (isRefreshing) {
                return new Promise((resolve) => {
                    refreshQueue.push((newToken) => {
                        if (newToken) {
                            original.headers.Authorization = `Bearer ${newToken}`;
                            resolve(api(original));
                        } else {
                            resolve(Promise.reject(error));
                        }
                    });
                });
            }

            isRefreshing = true;

            try {
                const resp = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
                    {},
                    { withCredentials: true }
                );

                const newToken = resp.data.accessToken;

                setAccessToken(newToken);
                processQueue(newToken);

                original.headers.Authorization = `Bearer ${newToken}`;
                return api(original);
            } catch (err) {
                processQueue(null);
                setAccessToken(null);
                return Promise.reject(err);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);
