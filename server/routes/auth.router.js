import express from 'express'
const router = express.Router()

import { postSignIn, postSignUp, getSignOut } from "../controller/auth.controller.js"

router.post("/sign-in", postSignIn)
router.post("/sign-up", postSignUp)
router.get("/sign-out", getSignOut)

export default router