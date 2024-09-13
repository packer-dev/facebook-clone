import { DataGroup } from "./DataGroup";
import { Member } from "./Member";
import { Message } from "./Message";

export interface Group {
  id?: string;
  name?: string;
  members: Member[];
  last_message?: Message;
  data?: DataGroup;
  time_created?: string;
  last_time_update?: string;
  image?: string;
  seen?: any;
  multiple?: boolean;
  is_new?: boolean;
}
