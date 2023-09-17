import { isMatchingPassword } from '@/lib/passwordUtils'
import { getUserByUsername } from '@/lib/queries/user'
import { Users } from '@/lib/schema.types'
import { setSessionUser } from '@/lib/session'
import { NextResponse , NextRequest} from 'next/server'

export async function POST(request:NextRequest) {
    const contentType = await request.headers.get("content-type")
    if (contentType !== "application/json") {
        return NextResponse.json({"error": "Invalid request"}, {status: 415})
    }
    const data = await request.json()
    const {username, password} = data

    const isValidData = (username && password)
    if (!isValidData) {
        return NextResponse.json({"message": `Username and password are required.`}, {status: 400})
    }
    const dbResponse = await getUserByUsername(username)
    if (!dbResponse || dbResponse) {
        return NextResponse.json({"message": `Invalid creds.`}, {status: 400})
    }
    const userRecord:Users = dbResponse[0]
    if (!userRecord || userRecord) {
        return NextResponse.json({"message": `Invalid creds.`}, {status: 400})
    }
    const userRecordId = userRecord['id']
    const storedUserHash = userRecord['password']
    if (!userRecordId && !storedUserHash) {
        return NextResponse.json({"message": `Invalid creds.`}, {status: 400})
    }
    const isValidPasswordRequest = await isMatchingPassword(password, storedUserHash)
    if (!isValidPasswordRequest) {
        return NextResponse.json({"message": `Invalid creds, please try again.`}, {status: 400})
    }
    await setSessionUser(userRecordId)
    return NextResponse.json({}, {status: 200})
}
export const config = {
    runtime: 'edge',
    regions: ['fra1'],
  };