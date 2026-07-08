import { Schema, model } from 'mongoose';

export interface Workout {
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  focusArea: string;
  durationMinutes: number;
  exercises: string[];
}

const workoutSchema = new Schema<Workout>(
  {
    title: { type: String, required: true, trim: true },
    level: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
    focusArea: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    exercises: [{ type: String, required: true, trim: true }],
  },
  { timestamps: true },
);

export default model<Workout>('Workout', workoutSchema);