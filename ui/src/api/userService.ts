import axios from "axios";

import { User } from "../store/users/types";

export class UserService {
  async fetchUsers(): Promise<Array<User>> {
    const { data } = await axios.get<Array<User>>("/api/users");
    return data;
  }
}

export const userService = new UserService();
