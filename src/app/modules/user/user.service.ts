import { TUser } from './user.interface';
import { User } from './user.model';
// creating user into Database

const createNewUserToDB = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};

export const UserServices = {
  createNewUserToDB,
};
