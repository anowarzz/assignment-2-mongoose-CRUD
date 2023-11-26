import { Request, Response } from 'express';
import { UserServices } from './user.service';
import userValidationSchema from './user.validation';
import { z } from 'zod';
import { ErrorHandlers } from './user.error.handler';
import { User } from './user.model';

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
      const zodErrorResponse = ErrorHandlers.zodErrorResponse(error);
      res.status(500).json(zodErrorResponse);
    }
    // Handling MongodB error
    else if (error.code === 11000 && error.keyPattern) {
      const mongoErrorResponse = ErrorHandlers.mongoErrorResponse(error);
      res.status(500).json(mongoErrorResponse);
    }
    // Handling general error
    else {
      res.status(500).json({
        success: false,
        message: error.message || 'Something went wrong',
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
      message: err.message || 'Something went wrong',
    });
  }
};

// ====> Fetching a Single User from the database ===> //
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await UserServices.getSingleUserFromDB(Number(userId));

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
      message: err.message || 'Something went wrong',
    });
  }
};

// update a user information
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const numberTypeId = Number(id);

    if (!(await User.isUserExists(numberTypeId))) {
      res.status(500).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    } else {
      await UserServices.deleteUserFromDB(numberTypeId);

      res.status(200).json({
        success: true,
        message: 'User deleted successfully!',
        data: null,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
    });
  }
};

// update a user information into database
const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const numberTypeId = Number(id);
    const updatedInfo = req.body;

    if (!(await User.isUserExists(numberTypeId))) {
      res.status(500).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    } else {
      const updatedUser = await UserServices.updateUserIntoDB(
        numberTypeId,
        updatedInfo,
      );

      res.status(200).json({
        success: true,
        message: 'User updated successfully!',
        data: updatedUser,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
    });
  }
};

export const UserControllers = {
  createNewUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
