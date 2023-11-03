import Contacts from "@/server/models/contact"
import Users from "@/server/models/user"
import connectDb from "@/server/utils/db"
import { getUserInfo } from "@/server/utils/jwt"
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
        const { name, birthday, relation, email, phone, image_url, job, address } = await request.json()
        await connectDb()
        //cek user login
        const userId = getUserInfo(request)
        //add contact depend on user logged
        const newData = await Contacts.create({ name, birthday, relation, email, phone, image_url, job, address, user_id: userId })
        //add to contact_id field
        const userAdd = await Users.findById(userId);
        userAdd?.contact_id.push(newData._id);
        //save to database
        await userAdd?.save();
        return NextResponse.json({
            success: true,
            message: 'Success Create Contact',
            data: newData
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }


}


export const DELETE = async (request) => {
    const contactId = await request.nextUrl.searchParams.get('id');
    try {
        const token = request.cookies.get('token')?.value || ''
        if(!token){
            return NextResponse.json({
                success : false,
                message : `Unauthorize User`
            },{status : 400})
        }
        await connectDb();
        const deletedContact = await Contacts.findByIdAndDelete({ _id: contactId });
        
        if (!deletedContact) {
            return NextResponse.json({
                success: false,
                message: 'Contact not found'
            }, { status: 404 });
        }
        
        return NextResponse.json({
            success: true,
            message: `Contact ID: ${contactId} deleted successfully`
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 400 });
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
        const contactId = await request.nextUrl.searchParams.get('id');
        const dataUpdate = await request.json()
        await connectDb()
        await Contacts.findByIdAndUpdate(contactId,dataUpdate,{new : true})
        return NextResponse.json({
            success : true,
            message : `success update id : ${contactId}`
        },{status : 400})
    } catch (error) {
        return NextResponse.json({
            success : false,
            message : error.message
        },{status : 400})
    }
  


}