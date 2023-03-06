import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoot.js";

const app = express();

app.listen(5000, () => {
  app.use(cors());
  app.use(express.json());
  app.use(UserRoute);


  console.log("Server up and running..");
});
