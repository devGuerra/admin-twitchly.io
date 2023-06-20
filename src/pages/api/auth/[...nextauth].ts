import NextAuth, { CookiesOptions, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import TwitchProvider from "next-auth/providers/twitch";

import api from "@/services/api";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // perform you login logic
        // find out user from db

        const { data } = await api.post('/auth/sessions', { email, password })

        if (!data.user) {
          return null
        }
        // if everything is fine
        return {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          avatar: data.user.avatar,
          slug: data.user.slug,
          subcription_active: data.user.subcription_active,
          description: data.user.description,
          token: data.token,
        };
      },
    }),
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID!,
      clientSecret: process.env.TWITCH_CLIENT_SECRET!
    })
  ],
  pages: {
    signIn: "/login",
    // error: '/auth/error',
    newUser: '/login/register'
  },
  callbacks: {
    jwt(params) {
      // update token
      // return final_token
      return params.token;
    },
  },

};

export default NextAuth(authOptions);
