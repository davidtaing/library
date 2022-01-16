import express from "express";
import helmet from "helmet";
import compression from "compression";
import { initialize } from "express-openapi";
import apiSpec from "./v1/openapi/spec";

const app = express();
const PORT = 3000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

initialize({
  app,
  apiDoc: apiSpec,
  paths: "./src/v1/paths",
});

app.listen(3000, () => {
  console.log(`Express Server Listening on ${PORT}`);
});
