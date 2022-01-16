import { Request, Response, NextFunction } from "express";
import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";

// GET /members/:memberId
const GET: Operation = [
  (req: Request, res: Response, next: NextFunction) => {
    res.status(501).json();
  },
];

// PATCH /members/:memberId
const PATCH: Operation = [
  (req: Request, res: Response, next: NextFunction) => {
    res.status(501).json();
  },
];

// DELETE /members/:memberId
const DELETE: Operation = [
  (req: Request, res: Response, next: NextFunction) => {
    res.status(501).json();
  },
];

GET.apiDoc = paths["/members/{memberId}"]?.get;
PATCH.apiDoc = paths["/members/{memberId}"]?.patch;
DELETE.apiDoc = paths["/members/{memberId}"]?.delete;

const operations = () => ({ GET, PATCH, DELETE });

export default operations;
