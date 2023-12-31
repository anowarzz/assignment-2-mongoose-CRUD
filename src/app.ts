import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application Routes
app.use('/api/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Welcome to User Management API',
  });
});

// route error handler
app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Global error handler
app.use((error: Error, req: Request, res: Response) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: 'something went wrong',
      error: error.message,
    });
  }
});

export default app;
