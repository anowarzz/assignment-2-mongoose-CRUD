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

//Fetching a single user from DB based on Id
const getSingleUserFromDB = async (id: string) => {
  const user = await User.findOne({ userId: id });
  return user;
};

export const UserServices = {
  createNewUserToDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
};
