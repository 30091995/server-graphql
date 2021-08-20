import { Document as MongooseDocument, Types } from "mongoose";

export interface DBUserData {
    _id: Types.ObjectId;
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}