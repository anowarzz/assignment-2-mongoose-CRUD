import { Request, Response } from 'express';
import { UserServices } from './user.service';
import userValidationSchema from './user.validation';
import { z } from 'zod';
import { ErrorHandlers } from './user.error.handler';


// ======>   creating a new user  ====>   //
const createNewUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

const zodParsedUserData = userValidationSchema.parse(userData);

const result = await UserServices.createNewUserToDB(zodParsedUserData);

    // sending response
    res.status(200).json({
      success: true,
      message: 'User created successfully! ',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {

// Handling  Zod validation errors
    if (error instanceof z.ZodError) {
      const zodErrorResponse =  ErrorHandlers.zodErrorResponse(error) ;
      res.status(500).json(zodErrorResponse)
    }
// Handling MongodB error
    else if (error.code === 11000 && error.keyPattern) {
     const mongoErrorResponse =  ErrorHandlers.mongoErrorResponse(error)
     res.status(500).json(mongoErrorResponse)
    }
    // Handling general error
else{
res.status(500).json({
    success: false,
    message: 'Something went wrong',
    error: error.message ,
  });
}
  }
};

// ====> Fetching all users from the database ===> //
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await UserServices.getAllUsersFromDB();

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully',
      data: allUsers,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

// ====> Fetching a Single User from the database ===> //
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await UserServices.getSingleUserFromDB(userId);

    res.status(200).json({
      success: true,
      message: 'User fetched successfully',
      data: user,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

// update a user information

const updateOneUser = async (req: Request, res:Response) => {


}




export const UserControllers = {
  createNewUser,
  getAllUsers,
  getSingleUser,
};
