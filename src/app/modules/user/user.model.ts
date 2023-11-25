import { Schema, model } from 'mongoose';
import { TAddress, TFullName, TOrder, TUser } from './user.interface';

// Creating fullName Schema
const fullNameSchema = new Schema<TFullName>({
  firstName: { type: String, required: [true, 'First Name Is Required'] },
  lastName: { type: String, required: [true, 'Last Name Is Required'] },
});

// Creating an address Schema
const addressSchema = new Schema<TAddress>({
  street: { type: String, required: [true, 'Street Name Is Required'] },
  city: { type: String, required: [true, 'City Is Required'] },
  country: { type: String, required: [true, 'Street Name Is Required'] },
});

// Creating a Orders Schema

const OrderSchema = new Schema<TOrder>({
  productName: {
    type: String,
    required: [true, 'Product Name Is Required'],
    price: { type: Number, required: [true, 'Product Price is Required'] },
    quantity: { type: Number, required: [true, 'Order Quantity is Required'] },
  },
});

// Creating User Schema
const userSchema = new Schema<TUser>({
  userId: {
    type: Number,
    required: [true, 'User Id is Required'],
    unique: true,
    message: 'User ID Must Be Unique',
  },
  username: {
    type: String,
    required: [true, 'User Name is Required'],
    unique: true,
    message: 'User Name Must Be Unique',
  },
  password: {
    type: String,
    required: [true, 'Password Is Required'],
  },
  fullName: fullNameSchema,

  age: { type: Number, required: [true, 'Age is Required'] },
  email: { type: String, required: [true, 'Email Is Required'] },
  isActive: { type: Boolean, required: [true, 'Active Status Is Required'] },
  hobbies: {
    type: [String],
    required: [true, 'Hobbies Are Required'],
  },
  address: addressSchema,
  orders: OrderSchema,
});

export const User = model<TUser>('User', userSchema);
