import { NextResponse } from 'next/server'

 

export function middleware(request) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/api/login-user' || path === '/api/register-user'

  const token = request.cookies.get('token')?.value || ''


  if (!isPublicPath && !token) {
    return NextResponse.json({
        success : false,
        message : 'Unauthorize User dari middleware'
    },{status : 200})
  }
    
}

 

export const config = {
  matcher: [
    '/api/contact/create-address',
    '/api/contact/create-contact',
    '/api/login-user',
    '/api/logout-user',
    '/api/me',
    '/api/register-user',
  ]
}