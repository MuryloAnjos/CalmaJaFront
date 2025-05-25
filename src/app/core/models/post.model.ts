export interface Post {
    id: number;
    content: string;
    userId: string;
    isVerified: boolean;
    upvotes: number;
    complaints: number;
}