'use client'

import { useUserProfile } from '@/hooks/useUser';
import ProfileHeader from './ProfileHeader';
import ProfileMenu from './ProfileMenu';

export default function ProfilePage() {
    const { data: userProfile, isLoading } = useUserProfile();

    const votedBooks = userProfile?.votedBooks || [];
    const requestedBooks = userProfile?.requestedBooks || [];

    const votedBooksCount = votedBooks.length;
    const requestedBooksCount = requestedBooks.length;
    const fulfilledRequestsCount = requestedBooks.filter(book => book.isPurchased).length;

    return (
        <div className="min-h-screen">
            <ProfileHeader
                votedBooksCount={votedBooksCount}
                requestedBooksCount={requestedBooksCount}
                fulfilledRequestsCount={fulfilledRequestsCount}
                isLoading={isLoading}
            />
            <ProfileMenu
                votedBooks={votedBooks}
                requestedBooks={requestedBooks}
                isLoading={isLoading}
            />
        </div>
    );
}