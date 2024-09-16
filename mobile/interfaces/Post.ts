import { ContentPost } from "./ContentPost";
import { Feel } from "./Feel";
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
  activity?: string;
  local?: string;
  background?: string;
  answer_question?: {
    content: string;
    value: string;
  };
}

export interface PostDTO {
  post: Post;
  medias: Media[];
  feel: Feel[];
  comment: number;
}
