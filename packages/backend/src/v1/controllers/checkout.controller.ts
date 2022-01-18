import { Request, Response, NextFunction } from "express";

class CheckoutController {
  static async post(req: Request, res: Response, next: NextFunction) {
    res.status(501).json();
  }
}

export default CheckoutController;
