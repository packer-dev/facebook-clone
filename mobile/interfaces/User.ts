export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
  cover: string;
  last_time_active: string;
  time_created: string;
  bio: string;
}

export interface FriendProfileDTO {
  user: User;
  manual: number;
  status: 0 | 1 | 2 | 3 | 4;
}
