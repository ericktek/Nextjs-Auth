'use server'
import { signIn } from '@/auth';


export const authenticate = async (formData) => {
    try {
        await signIn("credentials", formData);
    } catch (error) {
        console.error(error);
        throw error;
    }
}
