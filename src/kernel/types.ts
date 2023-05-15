export type Entity<Tidentifier extends number | string> = {
    id?: Tidentifier
}

export type ResponseApi<T> = {
    code: number,
    message?: string,
    error?: boolean,
    entry?: T,
    entries?: T[],
    count?: number
}