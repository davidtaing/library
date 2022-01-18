import { Request, Response, NextFunction } from "express";

export const login = (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json();
};

export const register = (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json();
};
