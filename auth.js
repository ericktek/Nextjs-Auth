import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { authConfig } from "./auth.config";
import { bcrypt } from 'bcryptjs';
import User from './app/models/user';
import { connectMongoDB } from './app/db/mongodb';
 
const login = async( credentials) => {
    try {
        connectMongoDB()
        const user = await User.findOne({email: credentials.email})

        if(!user) throw new Error("Wrong credentials")

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

        if(!isPasswordCorrect) throw new Error("Wrong credentials")

        return user;

    } catch (error) {
        throw new Error("Failed to login")
    }
}



export const { signIn, signOut, auth } = NextAuth ({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try{
                    const { email, password } = credentials
                    const user = await login(email);

                    if(!user) throw new Error("Wrong credentials")

                    const isPasswordCorrect = await bcrypt.compare(password, user.password)

                    if(!isPasswordCorrect) throw new Error("Wrong credentials")

                    return user;
                } catch (error) {
                    return null;
                }
            }
        })
    ]
})