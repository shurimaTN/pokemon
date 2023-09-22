import { endSessionForUser } from '@/lib/session'
import { NextRequest, NextResponse } from 'next/server'


export async function POST(request:NextRequest):Promise<NextResponse> {
    await endSessionForUser()
    return NextResponse.json({t:"t"}, {status: 200})
}
export const config = {
    runtime: 'edge',
    regions: ['fra1'],
  };