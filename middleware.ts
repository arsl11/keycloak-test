import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: `/custom-signin`
  }
})

export const config = { matcher: ["/admin", "/me"] }
