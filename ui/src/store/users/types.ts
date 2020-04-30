export type UserId = number;
export type UserName = string;

export interface User {
  username: UserName;
  id: UserId;
}

export interface UserState {
  users: Array<User>;
}
