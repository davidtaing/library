import { Request, Response, NextFunction } from "express";
import CheckoutModel from "../models/checkout";

export const checkout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payload = req.body;
    const result = await CheckoutModel.create(payload);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
