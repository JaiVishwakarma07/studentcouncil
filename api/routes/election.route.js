import express from "express"
import { getCandidates, addCandidate, deleteCandidates } from "../controllers/election.controller.js"
// import { verifyToken } from "../middleware/jwt.js"

const router = express.Router()
router.post("/", addCandidate)
router.get("/", getCandidates)
router.delete("/", deleteCandidates)


export default router