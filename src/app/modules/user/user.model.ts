import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>({
  name: {  type: String,
  required: [true, "Name is Required, Please Provide a Name"]
},
  age: { type: Number, 
    required: [true, "age is Required, Please Provide a Name"]
},
  email: { type: String,
    required: [true, "email is Required, Please Provide a Name"]
},
});

export const User = model<TUser>('User', userSchema);
