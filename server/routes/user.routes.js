import express from 'express'
const router = express.Router()

import { postSign } from "../controller/router.controller.js"

router.post("", postSign)

export default router