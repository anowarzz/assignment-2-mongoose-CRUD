import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

// Create a new user in database
router.post('/', UserControllers.createNewUser);

// Fetch all the users from the database
router.get('/', UserControllers.getAllUsers);

// Fetch Single User form the database
router.get('/:userId', UserControllers.getSingleUser);

// Update a user information into database
router.put('/:userId', UserControllers.updateUser);

// Delete a user from the database
router.delete('/:userId', UserControllers.deleteUser);

// Add order into user's order array
router.put('/:userId/orders', UserControllers.addOrder);

// Get all the orders of a user
router.get('/:userId/orders', UserControllers.getUserOrders);

// Get total price of  the orders
router.get('/:userId/orders/total-price', UserControllers.getOrderTotalPrice);

export const UserRoutes = router;
