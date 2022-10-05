import { Response } from 'express';

export const ping = (_, res: Response) => {
  res.json({
    message: 'Ping Success',
  });
};
