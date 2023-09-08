import express from "express"
import { addPeople } from "../Controller/people.js"

const router = express.Router()

router.post("/infor", addPeople)

export default router