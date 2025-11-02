import * as userRepository from "../repositories/users.repository";
import { User } from "../types/users.types";




export const createUser = async (user: User) => await userRepository.createUser(user);



export const listUsers = async () => await userRepository.getAllUsers();



export const getUserById = async (id: number) => {
  if (isNaN(id)) {
    throw new Error("Invalid staffid");
  }

  const existingUser = await userRepository.getUserById(id);
  if (!existingUser) {
    throw new Error("User not found");
  }

  return existingUser;
};


export const updateUser = async (id: number, user: User) => {
  if (isNaN(id)) {
    throw new Error("Invalid staffid");
  }

  const existingUser = await userRepository.getUserById(id);
  if (!existingUser) {
    throw new Error("User not found");
  }

  return await userRepository.updateUser(id, user);
}


export const deleteUser = async (id: number) => {
  if (isNaN(id)) {
    throw new Error("Invalid staffid");
  }

  const existingUser = await userRepository.getUserById(id);
  if (!existingUser) {
    throw new Error("User not found");
  }

  return await userRepository.deleteUser(id);
}