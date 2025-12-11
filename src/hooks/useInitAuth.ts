"use client";

import { useEffect } from "react";
import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/authStore";

export function useInitAuth() {
    const setUser = useAuthStore((s) => s.setUser);
    const setAccessToken = useAuthStore((s) => s.setAccessToken);

    useEffect(() => {
        let mounted = true;

        authService
            .refreshToken()
            .then((res) => {
                if (!mounted) return;
                setUser(res.user);
                setAccessToken(res.accessToken);
            })
            .catch(() => {
                if (!mounted) return;
                setUser(null);
                setAccessToken(null);
            });

        return () => {
            mounted = false;
        };
    }, [setUser, setAccessToken]);
}
