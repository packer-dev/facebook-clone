import { Post } from "./Post";
import { User } from "./User";

export interface Feel {
    id: string;
    user: User;
    post: Post;
    type: number;
}