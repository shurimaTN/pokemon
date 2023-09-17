import { registerUser } from '@/lib/queries/user'
import { Users } from '@/lib/schema.types'
import { setSessionUser } from '@/lib/session'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request:NextRequest):Promise<NextResponse> {
    const contentType = await request.headers.get("content-type")
    if (contentType !== "application/json") {
        return NextResponse.json({"error": "Invalid request"}, {status: 415})
    }
    const data = await request.json()
    const {username, password, passwordConfirm} = data
    if (password !== passwordConfirm) {
        return NextResponse.json({"message": `Passwords must match. Please try again..`}, {status: 400})
    }

    const isValidData = (username && password)
    if (!isValidData) {
        return NextResponse.json({"message": `Username and password are required.`}, {status: 400})
    }
    const toSaveData:Partial<Users> = {
        username: data.username ,
        password: data.password,
        email: data.email
    }
    const dbResponse = await registerUser(toSaveData as Users)
    const responseData = dbResponse && dbResponse.data ? dbResponse.data : {}
    const responseStatus = dbResponse && dbResponse.status ? dbResponse.status : 500
    return NextResponse.json(responseData, {status: responseStatus})
}
export const config = {
    runtime: 'edge',
    regions: ['fra1'],
  };