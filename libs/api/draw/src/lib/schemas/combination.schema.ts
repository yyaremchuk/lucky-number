import * as mongoose from 'mongoose';

export const CombinationSchema = new mongoose.Schema({
  // string representation of 7 = 5 + 2 numbers joint by '.'
  value: String
});
