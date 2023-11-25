import { TUser } from './user.interface';
import { User } from './user.model';

// creating a user into Database
const createNewUserToDB = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};

// Fetching all users from Database
const getAllUsersFromDB = async () => {
  const users = await User.find();
  return users;
};

export const UserServices = {
  createNewUserToDB,
  getAllUsersFromDB,
};
