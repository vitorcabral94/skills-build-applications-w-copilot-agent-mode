"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LeaderboardEntry_1 = __importDefault(require("../models/LeaderboardEntry"));
const leaderboardRouter = (0, express_1.Router)();
leaderboardRouter.get('/', async (_request, response, next) => {
    try {
        const leaderboard = await LeaderboardEntry_1.default.find()
            .populate('user', 'name email')
            .populate('team', 'name')
            .sort({ rank: 1 });
        response.json({
            resource: 'leaderboard',
            items: leaderboard,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.default = leaderboardRouter;
