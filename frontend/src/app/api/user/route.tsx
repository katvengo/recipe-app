import { fetchUserAttributes } from 'aws-amplify/auth/server';
import { NextResponse } from 'next/server';
import { runWithAmplifyServerContext } from '@/utils/amplify-utils';
import { type Schema } from '@/amplify/data/resource';
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/data';
import { cookies } from 'next/headers';


export async function GET() {
  const user = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (contextSpec) => fetchUserAttributes(contextSpec)
  });
  
  return NextResponse.json({ user });
}