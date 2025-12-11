import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import type { LoginFormData, RegisterFormData } from "@/schemas/auth.schema";
import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/authStore";
import type { ErrorResponse } from "@/types/axios-error";

export const useRegister = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: (data: Omit<RegisterFormData, 'confirmPassword'>) => authService.register(data),
        onSuccess: () => {
            toast.success("Your account has been registered successfully!");
            router.push('/login')
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            const errorMessage = error.response?.data?.error || "Registration failed. Please try again.";
            toast.error(errorMessage);
        },
    });
};


export const useLogin = () => {
    const router = useRouter()
    const { setUser } = useAuthStore();
    const { setAccessToken } = useAuthStore();

    return useMutation({
        mutationFn: (data: LoginFormData) => authService.login(data),
        onSuccess: (data) => {
            setUser(data.user);
            setAccessToken(data.accessToken);
            router.push('/')
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            const errorMessage = error.response?.data?.error || "Login failed. Please try again.";
            toast.error(errorMessage)
        }
    })
}

export const useLogout = () => {
    const clearUser = useAuthStore((s) => s.clearUser);

    return useMutation({
        mutationFn: () => authService.logout(),
        onSuccess: () => {
            clearUser();
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            const errorMessage = error.response?.data?.error || "Logout failed. Please try again.";
            toast.error(errorMessage);
        }
    })
}