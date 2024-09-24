import { ContentPost } from "./ContentPost";
import { Feel } from "./Feel";
import { Media } from "./Media";
import { User } from "./User";

export interface Background {
  id: string;
  value: string;
  key: string;
  type: number;
}

export interface Activity {
  id: string;
  data: string;
  label: string;
  name: string;
  idActivity: string;
}

export interface FeelPost {
  id: string;
  data: string;
  label: string;
}

export interface AnswerQuestion {
  id: string;
  content: string;
  value: string;
}

export interface Local {
  id: string;
  name: string;
}

export interface Post {
  id?: string;
  user: User;
  content: ContentPost;
  time_created?: string;
  last_time_update?: string;
  type?: number;
  tags?: User[];
  feel?: FeelPost;
  activity?: Activity;
  local?: Local;
  background?: Background;
  answer_question?: AnswerQuestion;
}

export interface PostDTO {
  post: Post;
  medias: Media[];
  feel: Feel[];
  comment: number;
}
