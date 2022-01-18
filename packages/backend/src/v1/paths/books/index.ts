import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";
import { getBooks, postBook } from "../../controllers/books.controllers";

// GET /books
const GET: Operation = [getBooks];

// POST /books
const POST: Operation = [postBook];

GET.apiDoc = paths["/books"]?.get;
POST.apiDoc = paths["/books"]?.post;

const operations = () => ({ GET, POST });

export default operations;
