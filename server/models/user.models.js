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
        type:String,
        required: true,
        unique: true,
    },

    profilePicture: {
        googleImageUrl: {
            type: String,
        },

        defaultImageUrl: {
            type: String,
            default: "https://cdn-icons-png.flaticon.com/256/622/622851.png",

        },

        githubImageUrl: {
            type: String,
        }
    }
}, { timestamps: true })


const User = mongoose.model("user", userSchema)
export default User
