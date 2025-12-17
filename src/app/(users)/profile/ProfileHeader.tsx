'use client'

import { Mail } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuthStore } from '@/store/authStore';
import OrnamentBackground from '@/app/(users)/create-vote/OrnamentBackground';

// ============= Types =============
interface StatCardProps {
    count: number;
    label: string;
    isLoading?: boolean;
}

interface ProfileHeaderProps {
    votedBooksCount: number;
    requestedBooksCount: number;
    fulfilledRequestsCount: number;
    isLoading: boolean;
}

// ============= Components =============
const StatCard = ({ count, label, isLoading }: StatCardProps) => (
    <div className="card">
        <h4 className='text-cyan-500 font-bold text-xl'>
            {isLoading ? '...' : count}
        </h4>
        <p className='text-sm opacity-70'>{label}</p>
    </div>
);

// ============= Main Component =============
export default function ProfileHeader({
    votedBooksCount,
    requestedBooksCount,
    fulfilledRequestsCount,
    isLoading
}: ProfileHeaderProps) {
    const user = useAuthStore(state => state.user);

    if (!user) return null;

    // Format user initials
    const initialName = user.fullname
        .split(' ')
        .slice(0, 2)
        .map(n => n.at(0))
        .join('')
        .toUpperCase();

    // Format join date
    const joinedAt = new Date(user.createdAt);
    const formattedDate = joinedAt.toLocaleDateString('id-ID', {
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="border-b md:h-72 flex items-center p-8 md:px-20 relative">
            <OrnamentBackground />

            <div className="profile flex flex-col md:flex-row gap-8 md:gap-10">
                <Avatar className="size-20 md:size-24 border-4 mt-6 md:mt-0 border-white shadow-sm md:shadow-lg">
                    <AvatarFallback className="text-2xl bg-linear-to-br from-primary to-secondary text-white">
                        {initialName}
                    </AvatarFallback>
                </Avatar>

                <div className="profile-info mt-1">
                    <h1 className='font-bold text-2xl'>{user.fullname}</h1>
                    <h4 className='opacity-80 mt-px mb-2'>Member sejak {formattedDate}</h4>
                    <p className='flex text-sm items-center gap-1.5 opacity-80'>
                        <Mail size={16} />
                        {user.email}
                    </p>

                    <div className="grid grid-cols-3 mt-10 gap-10">
                        <StatCard
                            count={votedBooksCount}
                            label="Voted Books"
                            isLoading={isLoading}
                        />
                        <StatCard
                            count={requestedBooksCount}
                            label="Requested Books"
                            isLoading={isLoading}
                        />
                        <StatCard
                            count={fulfilledRequestsCount}
                            label="Requests Fulfilled"
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
