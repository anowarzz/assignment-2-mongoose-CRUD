import { TUser } from './user.interface';
import { User } from './user.model';

// creating a user into Database
const createNewUserToDB = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};

// Fetching all users from Database
const getAllUsersFromDB = async () => {
  const users = await User.find()
    .select({ username: 1, fullName: 1, age: 1, email: 1, address: 1 })
    .exec();
  return users;
};

//Fetching a single user from DB based on Id
const getSingleUserFromDB = async (id: string) => {
  const user = await User.findOne({ userId: id });
  return user;
};

// updating a user information

export const UserServices = {
  createNewUserToDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
};
