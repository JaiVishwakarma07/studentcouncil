import mongoose from 'mongoose'

const { Schema } = mongoose;

const ElectionSchema = new Schema({
    candidate: {
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
    course: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
        required: true,
        default: 0
    },

}, { timestamps: true })

export default mongoose.model(("Election", ElectionSchema))