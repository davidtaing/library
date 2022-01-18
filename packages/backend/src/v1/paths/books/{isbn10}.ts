import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";
import BooksController from "../../controllers/books.controllers";

// GET /books/:isbn10
const GET: Operation = [BooksController.getById];

// PATCH /books/:isbn10
const PATCH: Operation = [BooksController.patch];

// DELETE /books/:isbn10
const DELETE: Operation = [BooksController.delete];

GET.apiDoc = paths["/books/{isbn10}"]?.get;
PATCH.apiDoc = paths["/books/{isbn10}"]?.patch;
DELETE.apiDoc = paths["/books/{isbn10}"]?.delete;

const operations = () => ({ GET, PATCH, DELETE });

export default operations;
