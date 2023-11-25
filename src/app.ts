import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application Routes
app.use('/api/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello, i hope you got your response' });
});

app.get('/user', (req: Request, res: Response) => {
  res.send('Hello my dear user');
});


// route error handler
app.all("*", (req: Request, res: Response) => {
    res.status(404).json({
      success: false,
      message: "Route not found",
    });
  });
  
  // Global error handler
  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error) {
      res.status(400).json({
        success: false,
        message: "something went wrong",
        error: error.message 
      });
    }
  });



export default app;
