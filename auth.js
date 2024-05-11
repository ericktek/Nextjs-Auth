import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { compare } from "bcryptjs";
import User from "./app/models/user";
import { connectMongoDB } from "./app/db/mongodb";

async function login(email) {
  try {
    await connectMongoDB();
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    throw new Error("Failed to login");
  }
}

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const { email, password } = credentials;
          const user = await login(email);
          if (!user) {
            return null;
          } else {
            const isValid = await compare(password, user?.password);
            if (isValid) {
              return user;
            } else {
              return null;
            }
          }
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
});
