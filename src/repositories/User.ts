// using API 
// front-end should not direct access to database
import axios from "axios";
import { UserCreateRequest, UserResponse } from "../model/userModel";

export default class User {
  static async getUsers(){
    const response = await axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}/api/users`);
    return response.data as UserResponse[];
  }

  static async createUser(user: UserCreateRequest){
    const response = await axios.post(`${process.env.EXPO_PUBLIC_BASE_URL}/api/users`, user);
  };
}