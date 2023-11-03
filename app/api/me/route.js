import Users from "@/server/models/user"
import { getUserInfo } from "@/server/utils/jwt"
import { NextResponse } from "next/server"

export const GET = async (request) => {
    try {
        const token = request.cookies.get('token')?.value || ''
        if(!token){
            return NextResponse.json({
                success : false,
                message : `Unauthorize User`
            },{status : 400})
        }
        const userId = getUserInfo(request)
        const userInfo = await Users.findOne({ _id: userId })
            .select('-password')
            .populate({
                path: 'contact_id',
                populate: [
                    { path: 'address_id' },
                    { path: 'job_id' }
                ]
            })
            .exec()

        return NextResponse.json({
            success: true,
            message: 'Success Get Info User',
            data: userInfo
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}
