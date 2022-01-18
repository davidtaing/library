import { Request, Response, NextFunction } from "express";

export const getMembers = (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json();
};

export const getMemberById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(501).json();
};

export const postMember = (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json();
};

export const patchMember = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(501).json();
};

export const deleteMember = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(501).json();
};
