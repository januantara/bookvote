export interface UserProfileResponse {
    message: string;
    votedBooks: VotedBook[];
    requestedBooks: Book[];
    purchasedBooks: Book[];
}

export interface VotedBook {
    id: string;
    userId: string;
    bookId: number;
    votedAt: string;
    book: Book;
}

export interface Book {
    id: number;
    title: string;
    imageUrl: string;
    author: string;
    description: string;
    category: string;
    isPurchased: boolean;
    purchasedAt: null;
    voteCount: number;
    color: string;
    shelfPosition: null;
    requestedBy: string;
    createdAt: string;
}