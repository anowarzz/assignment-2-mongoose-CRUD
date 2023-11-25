import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
const port = 3000;

// Parsers
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello From Cold World! ft Mongoose");
});

app.get("/user", (req: Request, res: Response) => {
  res.send("Hello my dear user");
});

export default app;
