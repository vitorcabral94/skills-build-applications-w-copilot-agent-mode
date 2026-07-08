import { Schema, model } from 'mongoose';

export interface User {
  name: string;
  email: string;
  fitnessGoal: string;
  role: 'athlete' | 'coach' | 'captain';
  joinedAt: Date;
}

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    fitnessGoal: { type: String, required: true },
    role: { type: String, enum: ['athlete', 'coach', 'captain'], default: 'athlete' },
    joinedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export default model<User>('User', userSchema);