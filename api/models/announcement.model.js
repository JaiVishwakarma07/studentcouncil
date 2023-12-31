import mongoose from 'mongoose'

const { Schema } = mongoose;

const AnnouncementSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
}, { timestamps: true })

export default mongoose.model("Announcement", AnnouncementSchema)