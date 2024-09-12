import { ContentPost } from "./ContentPost";
import { Media } from "./Media";
import { User } from "./User";

export interface Post {
  id?: string;
  user: User;
  content: ContentPost;
  time_created?: string;
  last_time_update?: string;
  type?: number;
  tags?: User[];
  feel?: string;
}

export interface PostDTO {
  post: Post;
  medias: Media[];
  feel: string[];
  comment: number;
}
