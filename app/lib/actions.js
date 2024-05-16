'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(prevState, formData) {
  try {
    await signIn('credentials', formData, {
      redirectTo: '/dashboard',
      redirect: true,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return error.message;
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
