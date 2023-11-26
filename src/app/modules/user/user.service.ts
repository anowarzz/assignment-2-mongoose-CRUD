import { TUser } from './user.interface';
import { User } from './user.model';

// creating a user into Database
const createNewUserToDB = async (userData: TUser): Promise<TUser> => {
  const result = await User.create(userData);
  return result;
};

// Fetching all users from Database
const getAllUsersFromDB = async (): Promise<TUser[]> => {
  const users = await User.find()
    .select({ username: 1, fullName: 1, age: 1, email: 1, address: 1 })
    .exec();
  return users;
};

//Fetching a single user from DB based on Id
const getSingleUserFromDB = async (id: string): Promise<TUser | null> => {
  const user = await User.findOne({ userId: id });
  return user;
};

// updating a user information
const updateUserIntoDB = async (id: string, userData: TUser): Promise<TUser | null> => {


    
  const result = await User.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};


// Delete One User from DB
const deleteUserFromDB = async (id: string) : Promise<TUser | null> => {

const result = await User.findByIdAndDelete(id) ;

return result ;

} 




export const UserServices = {
  createNewUserToDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
  
};
