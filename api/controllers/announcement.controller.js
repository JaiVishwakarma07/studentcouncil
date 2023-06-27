import Announcement from "../models/announcement.model.js"

export const addAnnounce = async (req, res) => {
    const newAnnouncement = new Announcement(req.body)
    try {
        await newAnnouncement.save()
        res.status(201).json("Announcement made")
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getAnnounce = async (req, res) => {
    const q = req.query;
    const filters = {
        ...(q.category && { category: q.category }),
    }
    try {
        const announcement = await Announcement.find(filters).sort({ createdAt: -1 });
        res.status(200).send(announcement)

    } catch (error) {
        return res.status(500).json("Something went wrong")
    }
}