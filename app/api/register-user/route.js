import connectDb from "@/server/utils/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import Users from "@/server/models/user";


export const POST = async (request)=>{
    try {
        const {name,phone,email,password,image_url,address} = await request.json()
        await connectDb()
        const hashPassword = await bcrypt.hash(password,10)
        await Users.create({
            name,phone,email,password : hashPassword,image_url,address
        })
        return NextResponse.json({
            success : true,
            message : 'Success Register User'
        })
    } catch (error) {
        return NextResponse.json({
            success : false,
            message : error.message
        },{status : 500})
    }  
}