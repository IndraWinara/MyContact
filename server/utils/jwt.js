import jwt from 'jsonwebtoken'

export const getUserInfo = (request)=>{
    try {
        const token = request.cookies.get('token')?.value || ''
        const decoded = jwt.verify(token,process.env.TOKEN_SECRET)
        return decoded.id
    } catch (error) {
        throw new Error (error.message)
    }
}