import { Request, Response, NextFunction } from "express";
import { Operation } from "express-openapi";
import { paths } from "../../openapi/spec";

// POST /checkout
const POST: Operation = (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json("not yet implemented");
};

POST.apiDoc = paths["/checkout"]?.post;

const operations = () => ({ POST });

export default operations;
