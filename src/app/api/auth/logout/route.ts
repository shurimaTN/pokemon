import { endSessionForUser } from '@/lib/session'
import { NextRequest, NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

export async function GET(request:NextRequest):Promise<NextResponse> {
    await endSessionForUser()
    redirect('/')
}
/* export const config = {
    runtime: 'edge',
    regions: ['fra1'],
  }; */
export const runtime = 'edge';
//export const regions =  [ 'fra1']
