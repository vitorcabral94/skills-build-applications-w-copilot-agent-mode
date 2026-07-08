"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Workout_1 = __importDefault(require("../models/Workout"));
const workoutsRouter = (0, express_1.Router)();
workoutsRouter.get('/', async (_request, response, next) => {
    try {
        const workouts = await Workout_1.default.find().sort({ level: 1, title: 1 });
        response.json({
            resource: 'workouts',
            items: workouts,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.default = workoutsRouter;
