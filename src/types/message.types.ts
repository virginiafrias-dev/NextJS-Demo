import { UserType } from "./user.types";

export type MessageType = {
  id: string;
  user: UserType;
  // name?: string;
  message: string;
  repliesCount: number;
};
