import React from "react";
import type { UserDataType } from "../Data/userData";

export type UserContextType = {
  data: UserDataType;
  setData: React.Dispatch<React.SetStateAction<UserDataType>>;
};
export const UserContext = React.createContext<UserContextType | null>(null);
