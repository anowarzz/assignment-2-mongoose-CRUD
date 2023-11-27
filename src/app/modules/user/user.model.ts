import { Schema, model } from 'mongoose';
import {
  TAddress,
  TFullName,
  TOrder,
  TUser,
  UserModel,
} from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

// Creating fullName Schema
const fullNameSchema = new Schema<TFullName>(
  {
    firstName: {
      type: String,
      required: [true, 'First Name Is Required'],
      maxlength: [25, 'First Name Can Not Have More Than 25 Characters'],
    },
    lastName: {
      type: String,
      required: [true, 'Last Name Is Required'],
      maxlength: [25, 'First Name Can Not Have More Than 25 Characters'],
    },
  },
  { _id: false },
);

// Creating an address Schema
const addressSchema = new Schema<TAddress>(
  {
    street: { type: String, required: [true, 'Street Name Is Required'] },
    city: { type: String, required: [true, 'City Is Required'] },
    country: { type: String, required: [true, 'Street Name Is Required'] },
  },
  { _id: false },
);

// Creating a Orders Schema
const OrderSchema = new Schema<TOrder>(
  {
    productName: {
      type: String,
      required: [true, 'Product Name Is Required'],
    },
    price: {
      type: Number,
      required: [true, 'Product Price is Required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Order Quantity is Required'],
    },
  },
  { _id: false },
);

// Creating User Schema
export const userSchema = new Schema<TUser, UserModel>({
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
  orders: { type: [OrderSchema], default: [], required: false },
});

// Pre save middleware - to hash the password before saving user into db
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const userData = this;

  // hashing the password
  userData.password = await bcrypt.hash(
    userData.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

userSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password;
    delete ret.__v;
    delete ret._id;
    return ret;
  },
});

// creating a custom static method to check if the user exists

userSchema.statics.isUserExists = async function (id: number) {
  const existingUser = await User.findOne({ userId: id });
  return existingUser;
};

export const User = model<TUser, UserModel>('User', userSchema);
