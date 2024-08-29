import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date

    },

    verficationToken: {
        type: String
    },

    verficationTokenExpires: {
        type: Date
    }

}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;