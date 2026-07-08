import { Schema, model, Types } from 'mongoose';

export interface Activity {
  user: Types.ObjectId;
  team: Types.ObjectId;
  type: 'run' | 'cycle' | 'strength' | 'yoga' | 'swim';
  durationMinutes: number;
  caloriesBurned: number;
  completedAt: Date;
}

const activitySchema = new Schema<Activity>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    type: { type: String, enum: ['run', 'cycle', 'strength', 'yoga', 'swim'], required: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    caloriesBurned: { type: Number, required: true, min: 0 },
    completedAt: { type: Date, required: true },
  },
  { timestamps: true },
);

export default model<Activity>('Activity', activitySchema);