import mongoose from 'mongoose'

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    rollno: {
        type: String,
        required: true,
        unique: true
    },
    dept: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    social: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
}, { timestamps: true })

export default mongoose.model("User", UserSchema)