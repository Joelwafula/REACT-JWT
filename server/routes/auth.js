import express from "express"
import jwt from "jsonwebtoken"
import User from "../models/user"
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

dotenv.config()

const router = express.Router();
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
const refreshTokens =[];

router.use(cookieParser());
//registering routes





