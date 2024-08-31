import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/email.js";
import bcrypt from "bcryptjs";
import { User } from "../model/user.model.js";

const signUp = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        throw new ApiError(400, "Name, email and password are required");
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
        throw new ApiError(400, "User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!hashedPassword) {
        throw new ApiError(400, "Error in hashing password");
    }
    const verficationToken = Math.floor(100000 + Math.random() * 900000).toString();
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        verficationToken,
        verficationTokenExpires: Date.now() + 24 * 60 * 60 * 1000
    });

    await user.save();

    if (!user) {
        throw new ApiError(400, "Error in creating user");

    }

    generateTokenAndSetCookie(res, user);
    sendVerificationEmail(user.email, user.verficationToken);
    return res
        .status(201)
        .json(new ApiResponse(201, user, "User created successfully"));
})

const verifyEmail = asyncHandler(async (req, res) => {
    const { verficationToken } = req.body;
    if (!verficationToken) {
        throw new ApiError(400, "Email and verification token are required");
    }
    const user = await User.findOne({ verficationToken, verficationTokenExpires: { $gt: Date.now() } });
    if (!user) {
        throw new ApiError(400, "Invalid verification token");
    }
    user.isVerified = true;
    user.verficationToken = undefined;
    user.verficationTokenExpires = undefined;
    await user.save();
    await sendWelcomeEmail(user.email, user.name);
    return res
        .status(200)
        .json(new ApiResponse(200, user, "Email verified successfully"));

})

const signIn = asyncHandler(async (req, res) => {

    const { email, password } = req.body;
    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }
    const findUser = await User.findOne({ email }).select("-password");
    if (!findUser) {
        throw new ApiError(400, "User not found");
    }
    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch) {
        throw new ApiError(400, "Invalid password");
    }
    generateTokenAndSetCookie(res, findUser);
    findUser.lastLogin = Date.now();
    await findUser.save();
    return res
        .status(200)
        .json(new ApiResponse(200, findUser, "User signed in successfully"));
})

const signOut = asyncHandler(async (req, res) => {
    res.clearCookie("token");
    return res
        .status(200)
        .json(new ApiResponse(200, {}, "User signed out successfully"));
})



export {
    signUp,
    verifyEmail,
    signIn,
    signOut,
}