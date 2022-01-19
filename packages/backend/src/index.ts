import dotenv from "dotenv";
import app from "./app";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log(
    `Connected to database at ${process.env.MONGODB_CONNECTION_STRING}`
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Express Server Listening on ${process.env.PORT}`);
});
