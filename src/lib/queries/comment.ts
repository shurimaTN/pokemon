import { db } from "../db";
 import { Comments } from "../schema.types";
export async function getCommentsForPokemon(pokemon:string):Promise<Pick<Comments,"content" | "username" >[]> {
    return await db.selectFrom("comments").select(['comments.content', "comments.username",]).where("comments.pokemon","=",pokemon).execute();
}
export async function createCommentOnPokemon(pokemon:Pick<Comments, "content" | "pokemon" | "username">) {
    let response:any= {message: `Failed to add comment`}
    let responseStatus = 400
    try {
        let dbResponse = await db.insertInto("comments").values(pokemon as Comments).returningAll().executeTakeFirst()
        let dbResponseData = dbResponse
        if (dbResponseData) {
            
            response = {
                id: dbResponseData.id,
                ...pokemon
            }
        }
        responseStatus = 201
    } catch ({message}:any) {
        throw new Error("Failed to add comment");
        
    }
    return {data: response, status: responseStatus}
}