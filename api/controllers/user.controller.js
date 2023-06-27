import User from "../models/user.model.js"

export const deleteUser = async (req, res) => {
    const user = await User.findById(req.params.id)

    if (req.userId !== user._id.toString()) {
        return res.status(401).json("you can only delete your account")
    }
    await User.findByIdAndDelete(req.params.id)
    res.status(201).send("Deleted!")

}

export const getUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    res.status(201).send(user)
}
export const getUsers = async (req, res) => {
    const user = await User.find()
    res.status(201).send(user)
}