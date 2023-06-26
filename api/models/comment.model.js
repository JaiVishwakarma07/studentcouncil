import mongoose from 'mongoose'

const { Schema } = mongoose;

const CommentSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
}, { timestamps: true })

export default mongoose.model(("Comment", CommentSchema))