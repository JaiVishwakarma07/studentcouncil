import jwt from "jsonwebtoken"

export const verifyToken = (req, res) => {
    const token = req.cookies.accessToken
    if (!token) return res.status(401).json("not authenticated")

    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
        if (err) return res.status(403).json("token not valid")
        req.userId = payload.id;
        req.isAdmin = payload.isAdmin
    })
}