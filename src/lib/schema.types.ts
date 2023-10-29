/* export type Category = "Cultural" | "Mixed" | "Natural";

export type CategoryShort = "C" | "C/N" | "N";
 */
export interface Users {
  id: string | null;
  username: string;
  password: string;
  email: string;
}
export interface Comments {
  id: string | null;
  pokemon: string;
  username: string;
  content: string;
}

export interface DB {
  users: Users;
  comments: Comments;
}