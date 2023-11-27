import { z } from 'zod';

//=====> Zod validation Schema for user creation ====>

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
export const orderValidationSchema = z.object({
  productName: z.string().min(1, { message: 'Product Name Is Required' }),
  price: z
    .number()
    .positive({ message: 'Product Price must be a positive number' }),
  quantity: z
    .number()
    .positive({ message: 'Order Quantity must be a Positive number' }),
});

// User main object validation using Zod
export const userValidationSchema = z.object({
  userId: z.number().positive({ message: 'User Id must be a positive number' }),
  username: z.string().min(1, { message: 'User Name Is Required' }),
  password: z.string().min(1, { message: 'Password Is Required' }),
  fullName: fullNameValidationSchema,
  age: z.number().positive({ message: 'Age must be a positive number' }),
  email: z.string().email({ message: 'Invalid email format' }),
  isActive: z.boolean(),
  hobbies: z.array(
    z.string().min(1, { message: 'At least one hobby is required' }),
  ),
  address: addressValidationSchema,
  orders: z.array(orderValidationSchema).optional(),
});

// // Update user validation schema using Zod
// export const updateUserValidationSchema = z.object({
//     userId: z.number().positive().optional(),

//     username: z.string().min(1).optional(),

//     password: z.string().min(1).optional(),

//     fullName: fullNameValidationSchema.optional(),

//     age: z.number().positive().optional(),

//     email: z.string().email().optional(),

//     isActive: z.boolean().optional(),

//     hobbies: z.array(z.string().min(1)).optional(),

//     address: addressValidationSchema.optional(),

//     orders: z.array(orderValidationSchema).optional(),
//   })

//  UPDATE USER VALIDATION SCHEMA USING ZOD
//=====> Zod validation Schema for user update ===>

// Full name validation with Zod
const updateFullNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First Name Is Required' })
    .max(25, {
      message: "First Name Can't be More than 25 Characters says zod",
    })
    .optional(),
  lastName: z
    .string()
    .min(1, { message: 'Last Name Is Required' })
    .max(25, { message: "Last Name Can't be More than 25 Characters" })
    .optional(),
});

// Address validation with Zod
const updateAddressValidationSchema = z.object({
  street: z.string().min(1, { message: 'Street Name Is Required' }).optional(),
  city: z.string().min(1, { message: 'City Is Required by zod' }).optional(),
  country: z.string().min(1, { message: 'Country Is Required' }).optional(),
});

// Order validation with Zod
const updateOrderValidationSchema = z.object({
  productName: z
    .string()
    .min(1, { message: 'Product Name Is Required' })
    .optional(),
  price: z
    .number()
    .positive({ message: 'Product Price must be a positive number' })
    .optional(),
  quantity: z
    .number()
    .positive({ message: 'Order Quantity must be a Positive number' })
    .optional(),
});

// User main object validation using Zod
export const userUpdateValidationSchema = z.object({
  userId: z
    .number()
    .positive({ message: 'User Id must be a positive number' })
    .optional(),
  username: z.string().min(1, { message: 'User Name Is Required' }).optional(),
  password: z.string().min(1, { message: 'Password Is Required' }).optional(),
  fullName: updateFullNameValidationSchema.optional(),
  age: z
    .number()
    .positive({ message: 'Age must be a positive number' })
    .optional(),
  email: z.string().email({ message: 'Invalid email format' }).optional(),
  isActive: z.boolean().optional(),
  hobbies: z
    .array(z.string().min(1, { message: 'At least one hobby is required' }))
    .optional(),
  address: updateAddressValidationSchema.optional(),
  orders: z.array(updateOrderValidationSchema).optional(),
});
