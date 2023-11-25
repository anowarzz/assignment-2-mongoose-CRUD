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
    console.log(err);
    res.status(500).json({
        message: "something went wrong",
        error: err.message
    })
  }
};

export const UserControllers = {
  createNewUser,
};
