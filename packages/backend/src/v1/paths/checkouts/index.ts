import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";
import { checkout } from "../../controllers/checkouts.controllers";

// POST /checkout
const POST: Operation = [checkout];

POST.apiDoc = paths["/checkouts"]?.post;

const operations = () => ({ POST });

export default operations;
