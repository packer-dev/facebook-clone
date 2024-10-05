import { ContentComment } from "./ContentComment";
import { User } from "./User";

export interface Comment {
  id: string;
  user: User;
  content: ContentComment;
  time_created?: string;
  last_time_update?: string;
  level: number;
  parent: string;
  loading?: boolean;
}

export interface CommentDTO {
  item: Comment;
  child: Comment[];
}
