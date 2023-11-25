import express, { Application, Request, Response } from "express";
import cors from "cors";
const app : Application = express();


// Parsers
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {

    const a = 20 ;
  res.json({message: "Hello, i hope you got your response", result : a});
});

app.get("/user", (req: Request, res: Response) => {
  res.send("Hello my dear user");
});

export default app;
