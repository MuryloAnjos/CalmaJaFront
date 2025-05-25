export interface User {
    id: string;
    username: string;
    telephone: string;
    email: string; 
    role: string[];
    profileImage?: string; // interrogação é porque é opcional
}