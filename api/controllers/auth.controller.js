import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const register = async (req, res) => {

    try {
        const hash = bcrypt.hashSync(req.body.password, 5);
        const newUser = new User({
            ...req.body,
            password: hash,
        });

        await newUser.save();
        res.status(201).send("user created")
    }
    catch (err) {
        return res.status(500).json("Error in createing user")
    }

}

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        if (!user) return res.status(404).json("user not found")

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) return res.status(400).json("wrong email or password")

        const token = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        },
            process.env.JWT_KEY
        )

        const { password, ...info } = user._doc
        res.cookie("accessToken", token, { httpOnly: true, }).status(200).send(info)
    }
    catch (err) {
        return res.json(400).json(err)
    }
}

export const logout = async (req, res) => {
    res.clearCookie("accesToken", {
        sameSite: "none",
        secure: true,
    }).status(200).send("User has been logged out")
}