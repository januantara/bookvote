import type { RegisterFormData } from "@/types/register";
import { api } from "./client";

export const register = async (payload: Omit<RegisterFormData, 'confirmPassword'>) => {
    const res = await api.post("/auth/register", payload);

    return res.data;
}