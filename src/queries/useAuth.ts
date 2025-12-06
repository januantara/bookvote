import { useMutation } from "@tanstack/react-query";
import { register } from "@/api/auth";

export function useRegister() {
    return useMutation({
        mutationFn: (payload: {
            fullName: string;
            email: string;
            password: string;
            nim: string;
        }) => register(payload)
    });
}
