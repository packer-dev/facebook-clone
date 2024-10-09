import { User } from "./User";

export interface Story {
  id?: string;
  music?: string;
  user: User;
  type?: number;
  url?: string;
  time_created?: string;
}
