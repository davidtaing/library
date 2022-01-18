import { Request, Response, NextFunction } from "express";

class BooksController {
  static async get(req: Request, res: Response, next: NextFunction) {
    res.status(501).json();
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    res.status(501).json();
  }

  static async post(req: Request, res: Response, next: NextFunction) {
    res.status(501).json();
  }

  static async patch(req: Request, res: Response, next: NextFunction) {
    res.status(501).json();
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    res.status(501).json();
  }
}

export default BooksController;
