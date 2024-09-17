import { User } from "./User";

export interface Member {
  id: string;
  nickname?: string;
  user: User;
  is_owner?: boolean;
}
