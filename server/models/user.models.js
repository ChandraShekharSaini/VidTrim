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
            default: "https://res.cloudinary.com/dddvdibng/image/upload/v1744211382/VidTrim%20Assests/u5sq0eei02gmyifzdik8.jpg",

        },

        githubImageUrl: {
            type: String,
        },
     
    }
}, { timestamps: true })


const User = mongoose.model("user", userSchema)
export default User
