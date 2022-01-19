import { Request, Response, NextFunction } from "express";
import BookModel from "../models/book";

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filter = req.query;
    const result = await BookModel.find(filter);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export const getBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = req.params._id;
    const result = await BookModel.findOne({ _id });
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
    const _id = req.params._id;
    const result = await BookModel.updateOne({ _id }, payload);
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
    const _id = req.params._id;
    const result = await BookModel.deleteOne({ _id });
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
