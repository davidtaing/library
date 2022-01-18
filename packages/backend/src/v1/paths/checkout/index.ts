import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";
import CheckoutController from "../../controllers/checkout.controller";

// POST /checkout
const POST: Operation = [CheckoutController.post];

POST.apiDoc = paths["/checkout"]?.post;

const operations = () => ({ POST });

export default operations;
