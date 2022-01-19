import { Request, Response, NextFunction } from "express";
import MemberModel from "../models/member";

export const getMembers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filter = req.query;
    const result = await MemberModel.find(filter);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export const getMemberById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = req.params._id;
    const result = await MemberModel.findOne({ _id });
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export const postMember = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payload = req.body;
    const result = await MemberModel.create(payload);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

export const patchMember = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = req.params._id;
    const payload = req.body;
    const result = await MemberModel.findOneAndUpdate({ _id }, payload);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export const deleteMember = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = req.params._id;
    const result = await MemberModel.findByIdAndDelete({ _id });
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
