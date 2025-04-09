import mongoose, { Schema } from "mongoose"

const userSchema = Schema({

    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,

    },

    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },

    profilePicture: {
        googleImageUrl: {
            type: String,
        },

        defaultImageUrl: {
            type: String,
            default: "https://t4.ftcdn.net/jpg/13/52/79/05/360_F_1352790598_0zmu2UfeR328Dw53Zgeu1IJzOTMsL9vI.jpg",

        },

        githubImageUrl: {
            type: String,
        },
     
    }
}, { timestamps: true })


const User = mongoose.model("user", userSchema)
export default User
