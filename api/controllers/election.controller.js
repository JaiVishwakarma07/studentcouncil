import Election from "../models/election.model.js";

export const addCandidate = async (req, res) => {
    // const newComment = new Comments({ id: req.userId, ...req.body, })
    const newCandidate = new Election(req.body)
    try {
        await newCandidate.save()
        res.status(201).json("Candidate registered")
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getCandidates = async (req, res) => {
    const candidate = await Election.find();
    res.status(200).send(candidate)
}