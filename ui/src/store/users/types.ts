export type UserId = number;
export type UserName = string;

export interface User {
  id: UserId;
  username: UserName;
}

export interface UserState {
  users: Array<User>;
}
