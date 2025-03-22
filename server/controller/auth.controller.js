import User from "../models/user.models.js"
import jwt from 'jsonwebtoken'
import Cookies from "cookies"
import bcrypt from "bcrypt"
import errorHandler from "../utilits/errorHandler.js"
import { generateRandomName, generateRandomPassword } from "../utilits/functionalHandler.js"
import SignupMailer from "../Nodemailer/SignupMailer.js"



export const postSignIn = async (req, res, next) => {

    try {

        const { email, password } = req.body

        const user = await User.findOne({ email })
      
        if (!user) {
            return next(errorHandler(400, "User not found"))
        }
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
      console.log(password)
        if (!isPasswordCorrect) {
            return next(errorHandler(401, "Password is incorrect"))
        }


        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" })

        const cookie = new Cookies(req, res)
        cookie.set("access_token", token, { httpOnly: true })


        const { password: pass, ...rest } = user._doc


        res.status(200).json({
            message: "User logged in successfully",
            user: rest
        })

    } catch (error) {
        next(error)
    }
}

export const postSignUp = async (req, res, next) => {
    console.log(",,,,,,,,,")
    try {
        const { firstName, lastName, email } = req.body

        const user = await User.findOne({ email })

        if (user) {
            return next(errorHandler(400, "User already exists"))
        }


        const generatedUsername = generateRandomName()
        const generatedPassword = generateRandomPassword()



        const hashPassword = await bcrypt.hash(generatedPassword, 10);
        console.log(typeof hashPassword)
        const newUser = new User({
            firstName,
            lastName,
            email,
            username: generatedUsername,
            password: hashPassword

        })

        await newUser.save()

        SignupMailer(email, generatedUsername, generatedPassword)
        res.status(201).json({
            message: "User created successfully"
        })


    } catch (error) {
        next(error)
    }
}

export const getSignOut = (req, res, next) => {
    try {
        res.clearCookie("access_token")
        res.status(200).json({
            message: "User logged out successfully"
        })
    } catch (error) {
        next(error)
    }
}