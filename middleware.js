import { authConfig } from './auth.config';
import NextAuth from 'next-auth';
export const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl, auth } = req;
  const isLoggedIn = !!auth;

  const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
  const isOnLoggin = nextUrl.pathname.startsWith('/login');
  const isOnSingup = nextUrl.pathname.startsWith('/signup');
  if (isOnDashboard) {
    console.log('isOnDashboard', isOnDashboard);
    if (!isLoggedIn) {
      console.log('isLoggedIn', isLoggedIn);
      return Response.redirect(new URL('/login', nextUrl));
    }
  }
  if (isOnLoggin || isOnSingup) {
    if (isLoggedIn) {
      return Response.redirect(new URL('/dashboard', nextUrl));
    }
  }
});

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
