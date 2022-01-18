import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";
import { checkout } from "../../controllers/checkout.controllers";

// POST /checkout
const POST: Operation = [checkout];

POST.apiDoc = paths["/checkout"]?.post;

const operations = () => ({ POST });

export default operations;
