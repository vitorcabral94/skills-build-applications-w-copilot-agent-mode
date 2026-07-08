import { Router } from 'express';

import User from '../models/User';

const usersRouter = Router();

usersRouter.get('/', async (_request, response, next) => {
  try {
    const users = await User.find().sort({ name: 1 });

    response.json({
      resource: 'users',
      items: users,
    });
  } catch (error) {
    next(error);
  }
});

export default usersRouter;