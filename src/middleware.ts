// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nookies from "nookies";
import { storageTokens } from "./config/storageTokens";
import { useUser } from "./hooks/user";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = request.cookies.get(storageTokens.token)

  if (request.nextUrl.pathname.includes('/login') && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (request.nextUrl.pathname.includes('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }


  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login/:path*'],
}