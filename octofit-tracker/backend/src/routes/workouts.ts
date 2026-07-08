import { Router } from 'express';

import Workout from '../models/Workout';

const workoutsRouter = Router();

workoutsRouter.get('/', async (_request, response, next) => {
  try {
    const workouts = await Workout.find().sort({ level: 1, title: 1 });

    response.json({
      resource: 'workouts',
      items: workouts,
    });
  } catch (error) {
    next(error);
  }
});

export default workoutsRouter;