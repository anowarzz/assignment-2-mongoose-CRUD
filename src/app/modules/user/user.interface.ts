// Creating type for Order
export type Order = {
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
};
