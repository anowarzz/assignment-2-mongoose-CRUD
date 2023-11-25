import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';

// ======>   creating a new user  ====>   //
const createNewUser = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const userData = req.body;
    const result = await UserServices.createNewUserToDB(userData);

// sending response 
    res.status(200).json({
      success: true,
      message: 'User created successfully! ',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    next(err)
  }
};




// ====> Fetching all users from the database ===> 
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await UserServices.getAllUsersFromDB();

    res.status(200).json({
      message: 'Retrieved all users successfully',
      data: allUsers,
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

export const UserControllers = {
  createNewUser,
  getAllUsers,
};
