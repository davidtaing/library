import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";
import MembersController from "../../controllers/members.controller";

// GET /members/:memberId
const GET: Operation = [MembersController.getById];

// PATCH /members/:memberId
const PATCH: Operation = [MembersController.patch];

// DELETE /members/:memberId
const DELETE: Operation = [MembersController.delete];

GET.apiDoc = paths["/members/{memberId}"]?.get;
PATCH.apiDoc = paths["/members/{memberId}"]?.patch;
DELETE.apiDoc = paths["/members/{memberId}"]?.delete;

const operations = () => ({ GET, PATCH, DELETE });

export default operations;
