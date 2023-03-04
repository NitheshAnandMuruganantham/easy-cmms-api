import { NextFunction, Request, Response } from 'express';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';

export const authMiddleware = (token: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.headers?.apikey === token) {
      next();
    } else {
      return verifySession()(req, res, next);
    }
  };
};
