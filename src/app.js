import express from 'express';
import userRoute from './route/user.route.js';
import cookieParser from 'cookie-parser';

const app=express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

app.use('/api/user',userRoute);


export default app;