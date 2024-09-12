import { ReactNode } from "react";

export type AuthenticationProps = {
  children?: ReactNode;
  handleSubmit?: Function;
  buttonText: string;
  type: any;
};
