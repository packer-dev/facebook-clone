import { ContentMessage } from "./ContentMessage";
import { User } from "./User";

export interface Message {
    id: string;
    content: ContentMessage;
    user: User;
    time_created: string;
    loading?: boolean
}