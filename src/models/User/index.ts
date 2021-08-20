import { model } from "mongoose";
import { collectionName, modelName } from "./const";
import { UserSchema } from "./schema";
import { DBUserData } from "./types";

const UserModel = model<DBUserData>(modelName, UserSchema, collectionName);

export { UserSchema, UserModel };
