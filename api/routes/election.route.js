import express from "express"
import { getCandidates, addCandidate } from "../controllers/election.controller.js"
// import { verifyToken } from "../middleware/jwt.js"

const router = express.Router()
router.post("/", addCandidate)
router.get("/", getCandidates)


export default router