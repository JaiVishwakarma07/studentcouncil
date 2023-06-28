import express from "express"
import { getComment, addComment } from "../controllers/comment.controller.js"
// import { verifyToken } from "../middleware/jwt.js"

const router = express.Router()
router.post("/", addComment)
router.get("/", getComment)


export default router