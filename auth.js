import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.name = token.name;
      }
      return session;
    },

    async signIn(user, account, profile) {
      return true;
    },
    async redirect(url, baseUrl) {
      return baseUrl;
    },
    async session(session, user) {
      session.user = user;
      return session;
    },
  },
});
