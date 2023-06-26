import mongoose from 'mongoose'

const { Schema } = mongoose;

const FeedbackSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    rollno: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    club: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },


}, { timestamps: true })

export default mongoose.model("Feedback", FeedbackSchema)