import Comments from "../models/comment.model.js";

export const addComment = async (req, res) => {
    // const newComment = new Comments({ id: req.userId, ...req.body, })
    const newComment = new Comments(req.body)

    try {
        await newComment.save()
        res.status(201).json("Comment made")
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getComment = async (req, res) => {
    const q = req.query;
    const filters = {
        ...(q.id && { id: q.id }),
    }
    try {
        const comment = await Comments.find(filters).sort({ createdAt: -1 });
        res.status(200).send(comment)

    } catch (error) {
        return res.status(500).json("Something went wrong")
    }
}