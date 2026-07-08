import { Schema, model, Types } from 'mongoose';

export interface LeaderboardEntry {
  user: Types.ObjectId;
  team: Types.ObjectId;
  points: number;
  rank: number;
  streakDays: number;
}

const leaderboardEntrySchema = new Schema<LeaderboardEntry>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    points: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
    streakDays: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

export default model<LeaderboardEntry>('LeaderboardEntry', leaderboardEntrySchema, 'leaderboard');