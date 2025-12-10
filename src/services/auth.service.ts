import { LoginFormData, type RegisterFormData } from "@/schemas/auth.schema";
import { api } from "@/lib/axios";


export const authService = {
    register: async (data: Omit<RegisterFormData, 'confirmPassword'>) => {
        const response = await api.post('/auth/register', data);
        return response.data;
    },

    login: async (data: LoginFormData) => {
        const response = await api.post('/auth/login', data);
        return response.data;
    },

    logout: async () => api.post('/auth/logout'),

    refreshToken: async () => {
        const response = await api.post('/auth/refresh');
        return response.data;
    }
}