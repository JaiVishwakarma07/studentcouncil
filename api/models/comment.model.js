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
    category: {
        type: String,
        required: false,
    },
}, { timestamps: true })

export default mongoose.model("Comments", CommentSchema)