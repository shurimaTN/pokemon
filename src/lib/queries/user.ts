import { db } from "../db";
import { hashPassword } from "../passwordUtils";
import { Users } from "../schema.types";
export async function getUserByUsername(username:string):Promise<Pick<Users,"username" | "id" | "password">[]> {
    return await db.selectFrom("users").select(['users.username', "users.id", "users.password"]).where("users.username","=",username).execute();
}
export async function registerUser(newUserData:Pick<Users,"email"| "username" | "password">) {
    const {username} = newUserData
    const toInsertData:Partial<Users> = {
        username: username,
        password: await hashPassword(newUserData.password)
    }
    if (newUserData.email) {
        toInsertData['email'] = newUserData.email
    }

    let response:any= {message: `Failed to register. Please try again.`}
    let responseStatus = 400
    try {
        let dbResponse = await db.insertInto("users").values(toInsertData as Users).returningAll().executeTakeFirst()
        let dbResponseData = dbResponse
        if (dbResponseData) {
            
        response = [{
            id: dbResponseData.id,
            username: dbResponseData.username,
            
        }]}
        responseStatus = 201
    } catch ({message}:any) {
        if (`${message}`.includes("duplicate key value violates unique constraint")) {
            response = {message: `${username} is taken.`}
        }
    }
    return {data: response, status: responseStatus}
}