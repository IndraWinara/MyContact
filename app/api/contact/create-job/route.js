import Contacts from "@/server/models/contact"
import Jobs from "@/server/models/job"
import connectDb from "@/server/utils/db"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
        const token = request.cookies.get('token')?.value || ''
        if(!token){
            return NextResponse.json({
                success : false,
                message : `Unauthorize User`
            },{status : 400})
        }
        const contactId = await request.nextUrl.searchParams.get('id')
        const { job_name,position,location } = await request.json()
        await connectDb()
        const newData = await Jobs.create({ job_name,position,location})
        //add to contact_id field
        const jobsAdd = await Contacts.findById(contactId);
        jobsAdd?.job_id.push(newData._id);
        //save to database
        await jobsAdd?.save();
        return NextResponse.json({
            success: true,
            message: 'Success Create Jobs',
            data: newData
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }


}


export const DELETE = async (request)=>{
    try {
        const token = request.cookies.get('token')?.value || ''
        if(!token){
            return NextResponse.json({
                success : false,
                message : `Unauthorize User`
            },{status : 400})
        }
        const jobsId = await request.nextUrl.searchParams.get('id')
        await connectDb();
        await Jobs.findByIdAndDelete({ _id: jobsId });
        return NextResponse.json({
            success: true,
            message: 'Success Delete Jobs',
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}


export const PATCH = async (request)=>{

    try {
        const token = request.cookies.get('token')?.value || ''
        if(!token){
            return NextResponse.json({
                success : false,
                message : `Unauthorize User`
            },{status : 400})
        }
        const jobsId = await request.nextUrl.searchParams.get('id');
        const dataUpdate = await request.json()
        await connectDb()
        await Jobs.findByIdAndUpdate(jobsId,dataUpdate,{new : true})
        return NextResponse.json({
            success : true,
            message : `success update Jobs id : ${jobsId}`
        },{status : 400})
    } catch (error) {
        return NextResponse.json({
            success : false,
            message : error.message
        },{status : 400})
    }
  
}