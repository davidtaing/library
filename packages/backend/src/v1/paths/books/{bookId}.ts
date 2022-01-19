import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";
import {
  getBookById,
  patchBook,
  deleteBook,
} from "../../controllers/books.controllers";

// GET /books/:bookId
const GET: Operation = [getBookById];

// PATCH /books/:bookId
const PATCH: Operation = [patchBook];

// DELETE /books/:bookId
const DELETE: Operation = [deleteBook];

GET.apiDoc = paths["/books/{bookId}"]?.get;
PATCH.apiDoc = paths["/books/{bookId}"]?.patch;
DELETE.apiDoc = paths["/books/{bookId}"]?.delete;

const operations = () => ({ GET, PATCH, DELETE });

export default operations;
