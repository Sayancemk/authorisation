import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/asyncHandler.js';
import {ApiError} from"../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import User from '../model/user.model.js';

export const verifyToken=asyncHandler(async(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        throw new ApiError(401,"token not found")
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
        if(!decoded){
            throw new ApiError(401,"some error occured")
        }
        req.userId=await User.findById(decoded.id) // we can access this userId in the next middleware;
        next();

    }catch(err){
   console.log(err);
    }
    
})