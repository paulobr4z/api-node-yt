import express from "express";
import { config } from "dotenv";
import cors from "cors";

const app = express();

app.get("", (request, response) => {
  response.json({ message: "hello world!" })
})

export { app };