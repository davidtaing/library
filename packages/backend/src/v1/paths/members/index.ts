import { Request, Response, NextFunction } from "express";
import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";

// GET /members
const GET: Operation = [
  (req: Request, res: Response, next: NextFunction) => {
    res.status(501).json();
  },
];

// POST /members
const POST: Operation = [
  (req: Request, res: Response, next: NextFunction) => {
    res.status(501).json();
  },
];

GET.apiDoc = paths["/members"]?.get;
POST.apiDoc = paths["/members"]?.post;

const operations = () => ({ GET, POST });

export default operations;
