import { Request, Response, NextFunction } from "express";
import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";

// GET /books/:isbn10
const GET: Operation = [
  (req: Request, res: Response, next: NextFunction) => {
    res.status(501).json();
  },
];

// PATCH /books/:isbn10
const PATCH: Operation = [
  (req: Request, res: Response, next: NextFunction) => {
    res.status(501).json();
  },
];

// DELETE /books/:isbn10
const DELETE: Operation = [
  (req: Request, res: Response, next: NextFunction) => {
    res.status(501).json();
  },
];

GET.apiDoc = paths["/books/{isbn10}"]?.get;
PATCH.apiDoc = paths["/books/{isbn10}"]?.patch;
DELETE.apiDoc = paths["/books/{isbn10}"]?.delete;

const operations = () => ({ GET, PATCH, DELETE });

export default operations;
