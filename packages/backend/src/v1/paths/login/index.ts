import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";
import { login } from "../../controllers/auth.controllers";

// POST /login
const POST: Operation = [login];

POST.apiDoc = paths["/login"]?.post;

const operations = () => ({ POST });

export default operations;
