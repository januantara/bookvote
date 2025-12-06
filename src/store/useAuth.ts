
type User = {
    fullName: string;
    email: string;
    nim: string;
    role: 'voter' | 'staff';
}

export interface AuthState {
    user: User;
    setUser: (user: User) => void;
}