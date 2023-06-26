import Feedback from "../models/feedback.model.js"

export const getFeedback = async (req, res) => {
    const newFeedback = new Feedback(req.body)
    try {
        await newFeedback.save()
        return res.status(200).json("feedback created")
    } catch (error) {
        return res.status(401).json(error);
    }
}
export const showFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.find({ club: req.body.club })
        if (!feedback) return res.status(404).json("not found")
        return res.status(200).json(feedback)

    } catch (error) {
        return res.status(401).json(error);
    }
}