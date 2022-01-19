import { Request, Response, NextFunction } from "express";
import BookModel from "../models/book";

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await BookModel.find();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export const getBookByIsbn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const isbn10 = req.params.isbn10;
    const result = await BookModel.findOne({ isbn10 });
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export const postBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newBookData = req.body;
    const result = await BookModel.create(newBookData);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

export const patchBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payload = req.body;
    const isbn10 = req.params.isbn10;
    const result = await BookModel.updateOne({ isbn10 }, payload);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const isbn10 = req.params.isbn10;
    const result = await BookModel.deleteOne({ isbn10 });
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
