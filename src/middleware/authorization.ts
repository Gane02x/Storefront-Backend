import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authorization = (req: Request, res: Response, next: NextFunction) => {
  if (process.env.ENV !== "test") {
    try {
      const authorizationHeader = req.headers
        .authorization as unknown as string;
      const token = authorizationHeader.split(" ")[1];
      const decoded = jwt.verify(token, String(process.env.TOKEN_SECRET));
      next();
    } catch (error) {
      res.status(401);
    }
  }
  next();
};

