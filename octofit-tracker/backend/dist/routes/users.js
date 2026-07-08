"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const usersRouter = (0, express_1.Router)();
usersRouter.get('/', async (_request, response, next) => {
    try {
        const users = await User_1.default.find().sort({ name: 1 });
        response.json({
            resource: 'users',
            items: users,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.default = usersRouter;
