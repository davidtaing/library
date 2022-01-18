import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";
import {
  getMemberById,
  patchMember,
  deleteMember,
} from "../../controllers/members.controllers";

// GET /members/:memberId
const GET: Operation = [getMemberById];

// PATCH /members/:memberId
const PATCH: Operation = [patchMember];

// DELETE /members/:memberId
const DELETE: Operation = [deleteMember];

GET.apiDoc = paths["/members/{memberId}"]?.get;
PATCH.apiDoc = paths["/members/{memberId}"]?.patch;
DELETE.apiDoc = paths["/members/{memberId}"]?.delete;

const operations = () => ({ GET, PATCH, DELETE });

export default operations;
