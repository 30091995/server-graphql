import { mongo, Mongoose } from "mongoose";
import mongoose, { Schema } from "mongoose"

const userSchemaFields = {
    _id: {
        auto: true,
        type: mongoose.Types.ObjectId,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
}

const UserSchema : Schema = new Schema(userSchemaFields,{
    timestamps: true,
    toObject: {
        flattenMaps: true
    }
})

export { UserSchema };
