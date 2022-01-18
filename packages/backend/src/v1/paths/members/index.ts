import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";
import { getMembers, postMember } from "../../controllers/members.controllers";

// GET /members
const GET: Operation = [getMembers];

// POST /members
const POST: Operation = [postMember];

GET.apiDoc = paths["/members"]?.get;
POST.apiDoc = paths["/members"]?.post;

const operations = () => ({ GET, POST });

export default operations;
