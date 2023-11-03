import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value || "";
  const path = request.nextUrl.pathname;


  const isPublicPath = path === '/contact/login' || path === '/contact/register'
    // Rute-rute selain "/api" akan dialihkan ke URL yang sesuai
    if (!isPublicPath && !token) {
      return NextResponse.redirect(new URL("/contact/login", request.nextUrl));
    }

    if (isPublicPath && token) {
      return NextResponse.redirect(new URL("/contact", request.nextUrl));
    }
  
}


export const config = {
  matcher: [
    "/contact/login",
    "/contact/register",
    "/contact",
  ],
};
