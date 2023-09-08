import express from "express"
import { addPeople } from "../Controller/people.js"

const router = express.Router()

router.post(303,"/infor", addPeople)

export default router  