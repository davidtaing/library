import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";
import { register } from "../../controllers/auth.controllers";

// POST /register
const POST: Operation = [register];

POST.apiDoc = paths["/register"]?.post;

const operations = () => ({ POST });

export default operations;
