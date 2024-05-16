import { compare } from 'bcryptjs';
import Credentials from 'next-auth/providers/credentials';
import { connectMongoDB } from './app/db/mongodb';
import User from './app/models/user';
import { CredentialsSignin } from 'next-auth';

class InvalidLoginError extends CredentialsSignin {
  message = 'Invalid Information or password';
}

class UserNotFoundError extends CredentialsSignin {
  message = 'Your account does not exist';
}

export const authConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          throw new InvalidLoginError();
        }

        await connectMongoDB();
        const user = await User.findOne({ email: email });
        if (!user) {
          throw new UserNotFoundError();
        }
        const isValid = await compare(password, user?.password);
        if (!isValid) {
          throw new InvalidLoginError();
        }

        return user;
      },
    }),
  ],
};
