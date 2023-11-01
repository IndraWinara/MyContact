import Users from "@/server/models/user"
import connectDb from "@/server/utils/db"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const POST = async (request)=>{
    try {
    const {email,password} = await request.json()
    await connectDb()

    const user = await Users.findOne({email})
    if(!user){
        return NextResponse.json({
            success : false,
            message : 'Invalid Credential'
        },{status : 400})
    }

    const isPasswordMatch = await bcrypt.compare(password,user.password)

    if(isPasswordMatch === false){
        return NextResponse.json({
            success : false,
            message : 'Invalid Credential'
        },{status : 400})
    }

    const token = jwt.sign({id:user._id},process.env.TOKEN_SECRET,{expiresIn : '1d'})
    const response = NextResponse.json({
        success : true,
        message : 'Loggin Successfully'
    },{status : 200})
    response.cookies.set('token',token,{httpOnly:true})
  
    return response
    } catch (error) {
        return NextResponse.json({
            success : false,
            message : error.message
        },{status:500})
    }
    
}