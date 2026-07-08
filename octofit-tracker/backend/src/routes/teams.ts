import { Router } from 'express';

import Team from '../models/Team';

const teamsRouter = Router();

teamsRouter.get('/', async (_request, response, next) => {
  try {
    const teams = await Team.find().populate('members', 'name email role').sort({ name: 1 });

    response.json({
      resource: 'teams',
      items: teams,
    });
  } catch (error) {
    next(error);
  }
});

export default teamsRouter;