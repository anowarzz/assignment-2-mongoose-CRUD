import { z } from 'zod';

// Full name validation with Zod
const fullNameValidationSchema = z.object({
  firstName: z.string().min(1, { message: 'First Name Is Required' }).max(25, {
    message: "First Name Can't be More than 25 Characters says zod",
  }),
  lastName: z
    .string()
    .min(1, { message: 'Last Name Is Required' })
    .max(25, { message: "Last Name Can't be More than 25 Characters" }),
});

// Address validation with Zod
const addressValidationSchema = z.object({
  street: z.string().min(1, { message: 'Street Name Is Required' }),
  city: z.string().min(1, { message: 'City Is Required by zod' }),
  country: z.string().min(1, { message: 'Country Is Required' }),
});

// Order validation with Zod
const orderValidationSchema = z.object({
  productName: z.string().min(1, { message: 'Product Name Is Required' }),
  price: z
    .number()
    .positive({ message: 'Product Price must be a positive number' }),
  quantity: z
    .number()
    .positive({ message: 'Order Quantity must be a Positive number' }),
});

// Update user validation schema using Zod
const updateUserValidationSchema = z.object({
  userId: z.number().positive({ message: 'User Id must be a positive number' }),
  username: z.string().min(1, { message: 'User Name Is Required' }).optional(),
  password: z.string().min(1, { message: 'Password Is Required' }).optional(),
  fullName: fullNameValidationSchema.optional(),
  age: z
    .number()
    .positive({ message: 'Age must be a positive number' })
    .optional(),
  email: z.string().email({ message: 'Invalid email format' }).optional(),
  isActive: z.boolean().optional(),
  hobbies: z
    .array(z.string().min(1, { message: 'At least one hobby is required' }))
    .optional(),
  address: addressValidationSchema.optional(),
  orders: z.array(orderValidationSchema).optional(),
});

export default updateUserValidationSchema;