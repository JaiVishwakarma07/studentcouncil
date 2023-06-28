import mongoose from 'mongoose'

const { Schema } = mongoose;

const ElectionSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
        required: true,
        default: 0
    },

}, { timestamps: true })

export default mongoose.model("Election", ElectionSchema)