import { Entity } from "@/kernel/types"

export type Person = Entity<number> & {
    name: string,
    surname: string,
    lastname: string
}