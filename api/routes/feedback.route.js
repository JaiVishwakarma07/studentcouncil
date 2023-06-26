import express from "express"
import { getFeedback, showFeedback } from "../controllers/feedback.controller.js"

const router = express.Router()

router.post("/getfeedback", getFeedback)
router.post("/showfeedback", showFeedback)

export default router