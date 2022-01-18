import { Request, Response, NextFunction } from "express";

export const getBooks = (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json();
};

export const getBookById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(501).json();
};

export const postBook = (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json();
};

export const patchBook = (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json();
};

export const deleteBook = (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json();
};
