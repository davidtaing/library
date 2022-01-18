import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";
import {
  getBookById,
  patchBook,
  deleteBook,
} from "../../controllers/books.controllers";

// GET /books/:isbn10
const GET: Operation = [getBookById];

// PATCH /books/:isbn10
const PATCH: Operation = [patchBook];

// DELETE /books/:isbn10
const DELETE: Operation = [deleteBook];

GET.apiDoc = paths["/books/{isbn10}"]?.get;
PATCH.apiDoc = paths["/books/{isbn10}"]?.patch;
DELETE.apiDoc = paths["/books/{isbn10}"]?.delete;

const operations = () => ({ GET, PATCH, DELETE });

export default operations;
