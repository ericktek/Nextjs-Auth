import User from '@/app/models/user';

export async function GET(req) {
  try {
    const users = await User.find();
    console.log('users:', users);
    return Response.json({ users }, { status: 200 });
  } catch (error) {
    console.log('error:', error);
  }
}
