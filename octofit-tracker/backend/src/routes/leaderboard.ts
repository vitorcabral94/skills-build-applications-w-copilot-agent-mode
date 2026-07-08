import { Router } from 'express';

import LeaderboardEntry from '../models/LeaderboardEntry';

const leaderboardRouter = Router();

leaderboardRouter.get('/', async (_request, response, next) => {
  try {
    const leaderboard = await LeaderboardEntry.find()
      .populate('user', 'name email')
      .populate('team', 'name')
      .sort({ rank: 1 });

    response.json({
      resource: 'leaderboard',
      items: leaderboard,
    });
  } catch (error) {
    next(error);
  }
});

export default leaderboardRouter;