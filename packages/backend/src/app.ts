import express from "express";
import helmet from "helmet";
import compression from "compression";

const app = express();
const PORT = 3000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.listen(3000, () => {
  console.log(`Express Server Listening on ${PORT}`);
});
