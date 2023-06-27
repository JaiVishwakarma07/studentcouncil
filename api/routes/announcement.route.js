import express from "express"
import { getAnnounce, addAnnounce } from "../controllers/announcement.controller.js"

const router = express.Router()

router.post("/", addAnnounce)
router.get("/", getAnnounce)

export default router