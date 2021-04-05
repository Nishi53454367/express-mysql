import express, { Request, Response, NextFunction } from 'express';
import getUsers from './routes/getUsers';

// ルーターレベルでのルーティング設定
const apiRouter = express.Router();
apiRouter.get('/users', async (req: Request, res: Response, next: NextFunction) => {
  const users = await getUsers();
  res.send(users);
});

export default apiRouter;