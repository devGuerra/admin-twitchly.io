import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {

  },
  {
    callbacks: {
      authorized: ({ token }) => !!token?.email,

    },
  }
)

export const config = { matcher: ["/dashboard/:path*",] }