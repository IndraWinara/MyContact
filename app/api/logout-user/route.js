import { NextResponse } from "next/server"

export const POST = async (request)=>{
    try { 
        const token = request.cookies.get('token')?.value || ''
        if(!token){
            return NextResponse.json({
                success : false,
                message : `Unauthorize User`
            },{status : 400})
        }
        const response = NextResponse.json({
            success : true,
            message : 'Logout Successfully'
        },{status : 200})
        response.cookies.set('token',"",{maxAge : 1})
        return response
    } catch (error) {
        return NextResponse.json({
            success : false,
            message : error.message
        },{status:500})
    }
}