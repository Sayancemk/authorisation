import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (res, user) => {
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRE_TIME
    });

    res.cookie("token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"strict",
        maxAge:7*24*60*60*1000
    })
    return token;
};

