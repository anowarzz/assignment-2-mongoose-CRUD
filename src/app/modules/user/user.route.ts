import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

// Create a new user in database
router.post('/', UserControllers.createNewUser);

// Fetch all the users from the database
router.get('/', UserControllers.getAllUsers);

// Fetch Single User form the database
router.get('/:userId', UserControllers.getSingleUser);



export const UserRoutes = router;
