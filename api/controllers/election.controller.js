import Election from "../models/election.model.js";

export const addCandidate = async (req, res) => {
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
export const deleteCandidates = async (req, res) => {
    try {
        const id = req.body.id
        // console.log(id)
        await Election.findByIdAndDelete(id);
        res.status(200).send("candidate deleted");
    } catch (error) {
        return res.status(500).json(error)
    }
}