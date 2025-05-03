import { UserType } from "./user.types";

export type MessageType = {
  user: UserType;
  name: string;
  message: string;
};
