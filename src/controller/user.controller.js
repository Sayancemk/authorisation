import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import {
    sendVerificationEmail, 
    sendWElcomeEmail,
    loginSuccessEmail,
    sendPasswordResetRequestEmail,
    sendResetPasswordSuccessEmail,
} from "../mailtrap/email.js";

import bcrypt from "bcryptjs";
import crypto from "cryptojs";

import  User  from "../model/user.model.js";

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
    if (! verficationToken) {
        console.log(verficationToken);
        throw new ApiError(400, " verification token are required");
    }
    const user = await User.findOne({ verficationToken, verficationTokenExpires: { $gt: Date.now() } });
    if (!user) {
        throw new ApiError(400, "Invalid verification token");
    }
    user.isVerified = true;
    user.verficationToken = undefined;
    user.verficationTokenExpires = undefined;
    await user.save();
    await sendWElcomeEmail(user.email, user.name);
    return res
        .status(200)
        .json(new ApiResponse(200, user, "Email verified successfully"));

})

const signIn = asyncHandler(async (req, res) => {

    const { email, password } = req.body;
    console.log(password);
    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }
    const findUser = await User.findOne({ email });
    if (!findUser) {
        throw new ApiError(400, "User not found");
    }
    if (!findUser.isVerified) {
        throw new ApiError(400, "Email is not verified  please verify your email");
    }
    console.log(findUser);
    const isMatch = await bcrypt.compare(password, findUser.password);
    console.log(isMatch);
    if (!isMatch) {
        throw new ApiError(400, "Invalid password");
    }
    generateTokenAndSetCookie(res, findUser);
    findUser.lastLogin = Date.now();
    await findUser.save();
    await loginSuccessEmail(findUser.email, findUser.name);
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

const forgotPassword = asyncHandler(async (req, res) => {
    const { email } = req.body;
    if (!email) {
        throw new ApiError(400, "email is required to sent the email")
    }
    const findUser = await User.findOne({ email })
    if (!findUser) {
        throw new ApiError(400, "User is not find")
    }
    const resetPasswordToken = crypto.randomBytes(20).toString("hex");
    const resetPasswordExpires = Date.now() + 1 * 60 * 60 * 1000;// 1 Hour
    findUser.resetPasswordToken = resetPasswordToken;
    findUser.resetPasswordExpires = resetPasswordExpires;
    await findUser.save();
    // send email
    await sendPasswordResetRequestEmail(findUser.email, `${process.env.CLIENT_URL}/reset-password/{resetPasswordToken}`);
    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Email sent successfully"));
})

const resetPassword = asyncHandler(async (req, res) => {
    const { resetPasswordToken } = req.params;
    if(!resetPasswordToken){
        throw new ApiError(400,"Reset password token is required");
    }
    const { password } = req.body;
    if (!password) {
        throw new ApiError(400, "Password is required");
    }
    const findUser =await User.findOne({resetPasswordToken,resetPasswordExpires:{$gt:Date.now()}});
    if(!findUser){
        throw new ApiError(400,"Invalid reset password token");
    }
    findUser.password=await bcrypt.hash(password,10);
    findUser.resetPasswordToken=undefined;
    findUser.resetPasswordExpires=undefined;
    await findUser.save();
    //sent email
    await sendResetPasswordSuccessEmail(findUser.email);
    return res
        .status(200)
        .json(new ApiResponse(200,{}, "Password reset successfully"));

})

const checkAuth=asyncHandler(async(req,res)=>{
    const user=await User.findById(req.userId).select("-password");
    if(!user){
        throw new ApiError(400,"User not found");
    }
    return res
        .status(200)
        .json(new ApiResponse(200,user,"User found successfully"));
})
   
const updatePassword=asyncHandler(async(req,res)=>{
    const {oldPassword,newPassword}=req.body;
    if(!oldPassword||!newPassword){
        throw new ApiError(400,"Old password and new password are required");
    }
    if(oldPassword===newPassword){
        throw new ApiError(400,"Old password and new password should not be same");
    }
    const user=await User.findById(req.userId);
    if(!user){
        throw new ApiError(400,"User not found");
    }
    const isMatch=await bcrypt.compare(oldPassword,user.password);
    if(!isMatch){
        throw new ApiError(400,"Invalid old password");
    }

    user.password=await bcrypt.hash(newPassword,10);
    await user.save();
    return res
        .status(200)
        .json(new ApiResponse(200,{}, "Password updated successfully"));
})

const updateEmail=asyncHandler(async(req,res)=>{
    const {email}=req.body;
    if(!email){
        throw new ApiError(400,"Email is required");
    }
    const user=await User.findById(req.userId);
    if(!user){
        throw new ApiError(400,"User not found");
    }
    user.email=email;
    await user.save();
    return res
        .status(200)
        .json(new ApiResponse(200,{}, "Email updated successfully"));
})

export {
    signUp,
    verifyEmail,
    signIn,
    signOut,
    forgotPassword,
    resetPassword,
    updatePassword,
    updateEmail,
    checkAuth,
}