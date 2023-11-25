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
  res.json({ message: 'Hello, i hope you got your response'});
});

app.get('/user', (req: Request, res: Response) => {
  res.send('Hello my dear user');
});

export default app;
