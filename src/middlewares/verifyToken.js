import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/asyncHandler.js';
import {ApiError} from"../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";

export const verifyToken=asyncHandler(async(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Unauthorized access"})
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            throw new ApiError(401,"some error occured")
        }
        req.userId=decoded.userId  // we can access this userId in the next middleware;
        next();

    }catch(err){
        throw new ApiError(401,"Unauthorized access")
    }
    
})