import { Model } from 'mongoose';

// Creating type for Order
export type TOrder = {
  productName: string;
  price: number;
  quantity: number;
};

// Creating Type for FullName
export type TFullName = {
  firstName: string;
  lastName: string;
};

// Creating Type for Address
export type TAddress = {
  street: string;
  city: string;
  country: string;
};

// Creating a Type for User
export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TAddress;
  orders?: TOrder[];
};

export interface UserModel extends Model<TUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: number): Promise<TUser | null>;
}
