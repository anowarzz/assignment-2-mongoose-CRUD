import { TOrder, TUser } from './user.interface';
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
const getSingleUserFromDB = async (id: number): Promise<TUser | null> => {
  const user = await User.findOne({ userId: id });
  return user;
};

// updating a user information
const updateUserIntoDB = async (
  id: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userData: any,
): Promise<TUser | null> => {
  const result = await User.findOneAndUpdate({ userId: id }, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};

// Delete One User from DB
const deleteUserFromDB = async (id: number): Promise<TUser | null> => {
  const result = await User.findOneAndDelete({ userId: id });

  return result;
};

// Add Order into users order array
const addOrderIntoDB = async (
  id: number,
  order: TOrder,
): Promise<TUser | null> => {
  const result = await User.findOneAndUpdate(
    { userId: id },
    { $push: { orders: order } },
    { new: true, upsert: true },
  );
  return result;
};

// Find all the orders of an user

const getOrdersOfUser = async (id: number) => {
  const userOrders = await User.findOne({ userId: id }).select({ orders: 1 });
  return userOrders;
};

export const UserServices = {
  createNewUserToDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
  addOrderIntoDB,
  getOrdersOfUser,
};
