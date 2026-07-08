"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Activity_1 = __importDefault(require("../models/Activity"));
const LeaderboardEntry_1 = __importDefault(require("../models/LeaderboardEntry"));
const Team_1 = __importDefault(require("../models/Team"));
const User_1 = __importDefault(require("../models/User"));
const Workout_1 = __importDefault(require("../models/Workout"));
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Connected to octofit_db');
        console.log('Seed the octofit_db database with test data');
        await Promise.all([
            Activity_1.default.deleteMany({}),
            LeaderboardEntry_1.default.deleteMany({}),
            Team_1.default.deleteMany({}),
            User_1.default.deleteMany({}),
            Workout_1.default.deleteMany({}),
        ]);
        const users = await User_1.default.insertMany([
            {
                name: 'Avery Johnson',
                email: 'avery.johnson@example.com',
                fitnessGoal: 'Build a consistent half-marathon training base',
                role: 'captain',
                joinedAt: new Date('2026-01-10T09:00:00Z'),
            },
            {
                name: 'Maya Patel',
                email: 'maya.patel@example.com',
                fitnessGoal: 'Increase strength while improving mobility',
                role: 'athlete',
                joinedAt: new Date('2026-02-14T12:30:00Z'),
            },
            {
                name: 'Noah Kim',
                email: 'noah.kim@example.com',
                fitnessGoal: 'Improve cycling endurance for weekend races',
                role: 'athlete',
                joinedAt: new Date('2026-03-02T16:45:00Z'),
            },
            {
                name: 'Sofia Garcia',
                email: 'sofia.garcia@example.com',
                fitnessGoal: 'Coach balanced weekly training plans',
                role: 'coach',
                joinedAt: new Date('2026-01-22T08:15:00Z'),
            },
        ]);
        const teams = await Team_1.default.insertMany([
            {
                name: 'Octo Runners',
                city: 'Seattle',
                focus: 'Distance running and recovery habits',
                members: [users[0]._id, users[1]._id, users[3]._id],
            },
            {
                name: 'Core Crushers',
                city: 'Austin',
                focus: 'Functional strength and conditioning',
                members: [users[1]._id, users[2]._id],
            },
            {
                name: 'Velocity Squad',
                city: 'Denver',
                focus: 'Cycling endurance and interval training',
                members: [users[0]._id, users[2]._id],
            },
        ]);
        await Activity_1.default.insertMany([
            {
                user: users[0]._id,
                team: teams[0]._id,
                type: 'run',
                durationMinutes: 48,
                caloriesBurned: 520,
                completedAt: new Date('2026-07-05T13:30:00Z'),
            },
            {
                user: users[1]._id,
                team: teams[1]._id,
                type: 'strength',
                durationMinutes: 42,
                caloriesBurned: 360,
                completedAt: new Date('2026-07-06T18:15:00Z'),
            },
            {
                user: users[2]._id,
                team: teams[2]._id,
                type: 'cycle',
                durationMinutes: 75,
                caloriesBurned: 820,
                completedAt: new Date('2026-07-07T11:00:00Z'),
            },
            {
                user: users[3]._id,
                team: teams[0]._id,
                type: 'yoga',
                durationMinutes: 35,
                caloriesBurned: 160,
                completedAt: new Date('2026-07-08T07:45:00Z'),
            },
        ]);
        await LeaderboardEntry_1.default.insertMany([
            {
                user: users[2]._id,
                team: teams[2]._id,
                points: 1840,
                rank: 1,
                streakDays: 14,
            },
            {
                user: users[0]._id,
                team: teams[0]._id,
                points: 1715,
                rank: 2,
                streakDays: 11,
            },
            {
                user: users[1]._id,
                team: teams[1]._id,
                points: 1490,
                rank: 3,
                streakDays: 8,
            },
            {
                user: users[3]._id,
                team: teams[0]._id,
                points: 1325,
                rank: 4,
                streakDays: 6,
            },
        ]);
        await Workout_1.default.insertMany([
            {
                title: 'Morning Mobility Reset',
                level: 'beginner',
                focusArea: 'Mobility',
                durationMinutes: 20,
                exercises: ['Cat-cow flow', 'World greatest stretch', 'Hip airplanes', 'Ankle rocks'],
            },
            {
                title: 'Tempo Run Builder',
                level: 'intermediate',
                focusArea: 'Running endurance',
                durationMinutes: 45,
                exercises: ['10 minute warmup jog', '3 x 8 minute tempo intervals', '5 minute cooldown'],
            },
            {
                title: 'Total Body Strength Circuit',
                level: 'intermediate',
                focusArea: 'Strength',
                durationMinutes: 40,
                exercises: ['Goblet squats', 'Push-ups', 'Dumbbell rows', 'Reverse lunges', 'Plank holds'],
            },
            {
                title: 'Race Pace Cycling Intervals',
                level: 'advanced',
                focusArea: 'Cycling power',
                durationMinutes: 60,
                exercises: ['15 minute spinup', '6 x 4 minute race pace efforts', 'Easy cadence cooldown'],
            },
        ]);
        console.log('Database seeding complete');
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
