import { Request, Response, NextFunction } from "express";

export const checkout = (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json();
};
