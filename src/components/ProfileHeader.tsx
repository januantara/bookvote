"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/useAuth";
import { useAuthStore } from "@/store/authStore";
import { Mail, LogOut, UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const OrnamentBackground = () => (
    <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
            backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 50%, #000 20%, transparent 70%)",
            maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 50%, #000 20%, transparent 70%)",
        }}
    />
);

export default function ProfileHeader() {
    const user = useAuthStore((state) => state.user);
    const router = useRouter();
    const logout = useLogout();

    const handleLogout = async () => {
        logout.mutate();
        router.refresh();
    }

    const initialName = user?.fullname.split(' ').slice(0, 2).map(n => n.at(0)).join('').toUpperCase()

    return (
        <div className="bg-linear-to-r from-primary/10 to-secondary/10 border-b border-neutral-200 relative overflow-hidden">
            <OrnamentBackground />
            <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                    {/* Profile Info */}
                    <div className="flex gap-6 items-start">
                        {/* Avatar */}
                        <div className="relative">
                            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                                {/* <AvatarImage
                                    src={session.user.image || undefined}
                                    alt={session.user.name}
                                /> */}
                                <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-secondary text-white">
                                    {initialName}
                                </AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full shadow-lg">
                                <UserCircle className="w-5 h-5" />
                            </div>
                        </div>

                        {/* User Details */}
                        <div>
                            <h1 className="text-3xl font-bold text-neutral-900 mb-1">
                                {user?.fullname}
                            </h1>
                            <p className="text-neutral-600 mb-3">
                                Member sejak {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('id-ID', {
                                    year: 'numeric',
                                    month: 'long'
                                }) : 'N/A'}
                            </p>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-neutral-600">
                                    <Mail className="w-4 h-4" />
                                    <span className="text-sm">ajanuantara@gmail.com</span>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-8 mt-6">
                                <div className="bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                                    <p className="text-2xl font-bold text-primary">0</p>
                                    <p className="text-xs text-neutral-600">Vote Diajukan</p>
                                </div>
                                <div className="bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                                    <p className="text-2xl font-bold text-primary">0</p>
                                    <p className="text-xs text-neutral-600">Buku Divote</p>
                                </div>
                                <div className="bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                                    <p className="text-2xl font-bold text-primary">0</p>
                                    <p className="text-xs text-neutral-600">Vote Diterima</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                        <Button
                            variant="outline"
                            onClick={handleLogout}
                            disabled={logout.isPending}
                            className="text-red-600 border-red-200 hover:bg-red-50 bg-white/80 backdrop-blur-sm"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            {logout.isPending ? 'Logging out...' : 'Logout'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
