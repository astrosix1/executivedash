import { auth as nextAuth } from './auth';

export const auth = nextAuth;

export async function getSession() {
  return await nextAuth();
}

export async function getRequiredSession() {
  const session = await nextAuth();

  if (!session?.user?.id) {
    throw new Error('Unauthorized: No active session');
  }

  return session;
}
