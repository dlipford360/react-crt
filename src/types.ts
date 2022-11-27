import type { GetUsersQuery, GetTelevisionsQuery } from "./graphql/generated"

export type Message = GetUsersQuery["users"][0]["messages"][0]
export type User = GetUsersQuery["users"][0]
export type Television = GetTelevisionsQuery["televisions"][0]
