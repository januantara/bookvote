import { create } from 'zustand';

type User = {
    id: string;
    fullname: string;
    nim: string;
    email: string;
    role: 'voter' | 'staff';
    createdAt: string;
}

type AccessToken = string | null;

export interface AuthState {
    user: User | null;
    accessToken: AccessToken;

    setUser: (user: User | null) => void;
    setAccessToken: (token: AccessToken) => void;
    clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    accessToken: null,

    setUser: (user: User | null) => set({ user }),
    setAccessToken: (accessToken: AccessToken) => set({ accessToken }),
    clearUser: () => set({ user: null, accessToken: null }),
}));