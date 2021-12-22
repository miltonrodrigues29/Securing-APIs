import mongoose from "mongoose";
const Schema = mongoose.Schema;
import bycrpt from "bcrypt";

export const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hashPassword: {
    type: String,
    required: true,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.method.comparePassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};
