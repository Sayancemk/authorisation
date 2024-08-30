import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";

import bcrypt  from "bcryptjs";
import {User} from "../model/user.model.js";

const signUp=asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        throw new ApiError(400,"Name, email and password are required");
    }
    const userAlreadyExists=await User.findOne({email});
    if(userAlreadyExists){
        throw new ApiError(400,"User already exists");
    }
    const hashedPassword=await bcrypt.hash(password,10);
    if(!hashedPassword){
        throw new ApiError(400,"Error in hashing password");
    }
    const verficationToken=Math.floor(100000 + Math.random() * 900000).toString(); 
    const user=await User.create({
        name,
        email,
        password:hashedPassword,
        verficationToken,
        verficationTokenExpires:Date.now()+24*60*60*1000
    });

    await user.save();

    if(!user){
        throw new ApiError(400,"Error in creating user");
    
    }

    generateTokenAndSetCookie(res,user);
    return res
    .status(201)
    .json(new ApiResponse(201,user,"User created successfully"));
    })





    export{
        signUp,
    }