import app from "./app";
import mongoose from "mongoose";

const expressPort = 3000;
const dbUrl = "mongodb://localhost:27017/library";

mongoose.connect(dbUrl).then(() => {
  console.log(`Connected to database at ${dbUrl}`);
});

app.listen(expressPort, () => {
  console.log(`Express Server Listening on ${expressPort}`);
});
