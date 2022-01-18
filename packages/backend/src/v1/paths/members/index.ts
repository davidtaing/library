import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";
import MembersController from "../../controllers/members.controller";

// GET /members
const GET: Operation = [MembersController.get];

// POST /members
const POST: Operation = [MembersController.post];

GET.apiDoc = paths["/members"]?.get;
POST.apiDoc = paths["/members"]?.post;

const operations = () => ({ GET, POST });

export default operations;
