import { Request, Response, NextFunction } from "express";
import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";

// GET /books
const GET: Operation = [
  (req: Request, res: Response, next: NextFunction) => {
    res.status(501).json();
  },
];

// POST /books
const POST: Operation = [
  (req: Request, res: Response, next: NextFunction) => {
    res.status(501).json();
  },
];

GET.apiDoc = paths["/books"]?.get;
POST.apiDoc = paths["/books"]?.post;

const operations = () => ({ GET, POST });

export default operations;
