import Address from "@/server/models/addres"
import Contacts from "@/server/models/contact"
import connectDb from "@/server/utils/db"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
        const contactId = await request.nextUrl.searchParams.get('id')
        const { country,street,zip_code } = await request.json()
        await connectDb()
        const newData = await Address.create({ country,street,zip_code})
        //add to contact_id field
        const addressAdd = await Contacts.findById(contactId);
        addressAdd?.address_id.push(newData._id);
        //save to database
        await addressAdd?.save();
        return NextResponse.json({
            success: true,
            message: 'Success Create Address',
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
        const addressId = await request.nextUrl.searchParams.get('id')
        await connectDb();
        await Address.findByIdAndDelete({ _id: addressId });
        return NextResponse.json({
            success: true,
            message: 'Success Delete Address',
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
        const addressId = await request.nextUrl.searchParams.get('id');
        const dataUpdate = await request.json()
        await connectDb()
        await Address.findByIdAndUpdate(addressId,dataUpdate,{new : true})
        return NextResponse.json({
            success : true,
            message : `success update address id : ${addressId}`
        },{status : 400})
    } catch (error) {
        return NextResponse.json({
            success : false,
            message : error.message
        },{status : 400})
    }
  
}