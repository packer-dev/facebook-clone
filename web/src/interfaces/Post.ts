import { ContentPost } from "./ContentPost";
import { Feel } from "./Feel";
import { Media } from "./Media";
import { User } from "./User";

export interface Background {
  id: number;
  value: string;
  key: string;
  type: number;
}

export interface Activity {
  id: number;
  data: string;
  label: string;
  name: string;
  idActivity: number;
}

export interface FeelPost {
  id: number;
  data: string;
  label: string;
}

export interface AnswerQuestion {
  id: number;
  content: string;
  value: string;
}

export interface Local {
  id: number;
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
