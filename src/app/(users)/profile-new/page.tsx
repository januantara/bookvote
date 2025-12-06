'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSession } from '@/lib/auth-client';
import { Mail } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';
import VotedCard from '@/components/VotedCard';

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


const ProfileHeader = () => {
    const { data: session } = useSession();
    const initialName = session?.user.name.split(" ").map(u => u.at(0)).join("").toUpperCase();

    return (
        <div className=" border-b h-72 flex items-center px-20 relative">
            <OrnamentBackground />

            <div className="profile flex gap-10">
                {/* Avatar */}
                <Avatar className="size-24 border-4 border-white shadow-lg">
                    <AvatarImage
                        src={session?.user.image || undefined}
                        alt={session?.user.name}
                    />
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-secondary text-white">
                        {initialName}
                    </AvatarFallback>
                </Avatar>

                {/* User Detail */}
                <div className="profile-info mt-1">
                    <h1 className='font-bold text-2xl'>{session?.user.name}</h1>
                    <h4 className='opacity-80 mt-px mb-2'>Member sejak {session?.user.createdAt?.toLocaleDateString(undefined, {
                        month: 'long',
                        year: 'numeric'
                    })}</h4>
                    <p className='flex text-sm items-center gap-1.5 opacity-80'><Mail size={16} /> {session?.user.email}</p>

                    {/* Count Info */}
                    <div className="grid grid-cols-3 mt-10 gap-10">
                        <div className="card">
                            <h4 className='text-cyan-500 font-bold text-xl'>200</h4>
                            <p className='text-sm opacity-70'>Vote Diajukan</p>
                        </div>
                        <div className="card">
                            <h4 className='text-cyan-500 font-bold text-xl'>200</h4>
                            <p className='text-sm opacity-70'>Vote Diajukan</p>
                        </div>
                        <div className="card">
                            <h4 className='text-cyan-500 font-bold text-xl'>200</h4>
                            <p className='text-sm opacity-70'>Vote Diajukan</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

const ProfileMenu = () => {

    const newBooks = [
        {
            id: 1,
            title: "Atomic Habits",
            author: "James Clear",
            category: "Self-Help",
            likes: 2345,
            imageUrl: "https://cdn.gramedia.com/uploads/products/a-d-i2ia-n.jpg",
            dateAdded: "3 hari yang lalu",
            isPurchased: true
        },
        {
            id: 2,
            title: "The Midnight Library",
            author: "Matt Haig",
            category: "Fiction",
            likes: 1890,
            imageUrl: "https://cdn.gramedia.com/uploads/picture_meta/2023/10/30/debsfyx6tcwnvbwdteeakv.jpg",
            dateAdded: "1 minggu yang lalu",
            isPurchased: true
        },
        {
            id: 3,
            title: "Sapiens",
            author: "Yuval Noah Harari",
            category: "History",
            likes: 2156,
            imageUrl: "https://cdn.gramedia.com/uploads/products/a-d-i2ia-n.jpg",
            dateAdded: "2 minggu yang lalu",
            isPurchased: true
        },
        {
            id: 4,
            title: "Educated",
            author: "Tara Westover",
            category: "Memoir",
            likes: 1765,
            imageUrl: "https://cdn.gramedia.com/uploads/picture_meta/2023/10/30/debsfyx6tcwnvbwdteeakv.jpg",
            dateAdded: "3 minggu yang lalu",
            isPurchased: false
        },
        {
            id: 5,
            title: "The Silent Patient",
            author: "Alex Michaelides",
            category: "Thriller",
            likes: 1543,
            imageUrl: "https://cdn.gramedia.com/uploads/products/a-d-i2ia-n.jpg",
            dateAdded: "2 bulan yang lalu",
            isPurchased: false
        },
        {
            id: 6,
            title: "Dune",
            author: "Frank Herbert",
            category: "Science Fiction",
            likes: 2087,
            imageUrl: "https://cdn.gramedia.com/uploads/picture_meta/2023/10/30/debsfyx6tcwnvbwdteeakv.jpg",
            dateAdded: "2 bulan yang lalu",
            isPurchased: false
        },
        {
            id: 7,
            title: "Project Hail Mary",
            author: "Andy Weir",
            category: "Science Fiction",
            likes: 1923,
            imageUrl: "https://cdn.gramedia.com/uploads/products/a-d-i2ia-n.jpg",
            dateAdded: "3 bulan yang lalu",
            isPurchased: false
        },
        {
            id: 8,
            title: "The Psychology of Money",
            author: "Morgan Housel",
            category: "Finance",
            likes: 2234,
            imageUrl: "https://cdn.gramedia.com/uploads/picture_meta/2023/10/30/debsfyx6tcwnvbwdteeakv.jpg",
            dateAdded: "3 bulan yang lalu",
            isPurchased: false
        },
    ];

    return (
        <div className="p-20">
            <Tabs.Root defaultValue="history-voted">
                <Tabs.List aria-label="Profile menu" className='py-2 space-x-4 text-white'>
                    <Tabs.Trigger value="history-voted" className='px-3 py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-primary hover:text-white transition-colors duration-200 font-medium text-gray-500 rounded-md'>History Vote</Tabs.Trigger>
                    <Tabs.Trigger value="created-polls" className='px-3 py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-primary hover:text-white transition-colors duration-200 font-medium text-gray-500 rounded-md'>Created Polls</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="history-voted" className='py-6 grid grid-cols-4 gap-6'>
                    {newBooks.map((book) => (
                        <VotedCard
                            key={book.id}
                            title={book.title}
                            author={book.author}
                            category={book.category}
                            imageUrl={book.imageUrl}
                            dateAdded={book.dateAdded}
                            isPurchased={book.isPurchased}
                        />
                    ))}
                </Tabs.Content>
                <Tabs.Content value="created-polls">Profile content goes here</Tabs.Content>
            </Tabs.Root>
        </div>
    )
}

const ProfileNew = () => {
    return (
        <div className="min-h-screen">
            {/* Profile Header */}
            <ProfileHeader />

            <ProfileMenu />
        </div>
    );
}

export default ProfileNew;