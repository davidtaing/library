import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";
import BooksController from "../../controllers/books.controllers";

// GET /books
const GET: Operation = [BooksController.get];

// POST /books
const POST: Operation = [BooksController.post];

GET.apiDoc = paths["/books"]?.get;
POST.apiDoc = paths["/books"]?.post;

const operations = () => ({ GET, POST });

export default operations;
