import { User } from "@/interfaces/User";
import { ReactNode } from "react";

export type PopupProps = {
  index: number;
  popupId: string;
  payload?: any;
  children?: ReactNode;
  title?: string;
  handleDone?: (selected?: User[]) => void;
  disabled?: {
    done: boolean;
    cancel: boolean;
  };
  hidden?: boolean;
};
