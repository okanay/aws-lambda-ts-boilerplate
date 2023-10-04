import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(helmet());

app.get("/api", (req, res) => {
  res.json({
    message: "server is active again",
  });
});


export default app;
