import { Request, Response, NextFunction } from "express";
import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";

// POST /register
const POST: Operation = [
  (req: Request, res: Response, next: NextFunction) => {
    res.status(501).json();
  },
];

POST.apiDoc = paths["/register"]?.post;

const operations = () => ({ POST });

export default operations;
