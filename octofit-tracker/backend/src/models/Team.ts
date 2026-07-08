import { Schema, model, Types } from 'mongoose';

export interface Team {
  name: string;
  city: string;
  focus: string;
  members: Types.ObjectId[];
}

const teamSchema = new Schema<Team>(
  {
    name: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    focus: { type: String, required: true, trim: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true },
);

export default model<Team>('Team', teamSchema);