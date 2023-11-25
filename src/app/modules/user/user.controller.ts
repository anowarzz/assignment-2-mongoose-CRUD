import { Request, Response } from 'express';
import { UserServices } from './user.service';

// creating a new user
const createNewUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await UserServices.createNewUserToDB(userData);

    res.status(200).json({
      message: 'user created successfully ',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      message: 'something went wrong',
      error: err.message,
    });
  }
};

// Fetching all users from the database

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await UserServices.getAllUsersFromDB();

    res.status(200).json({
      message: 'Retrieved all users successfully',
      data: allUsers,
    });
  } catch (err: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    console.log(err);
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

export const UserControllers = {
  createNewUser,
  getAllUsers
};
