import * as mongoose from 'mongoose';

export const DrawSchema = new mongoose.Schema({
  date: Date,
  result: String,
  played: [String],
  suggested: [String]
});
