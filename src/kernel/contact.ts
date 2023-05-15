import { ResponseApi } from "./types"

export type UseCase<Tinput, Toutput> = {
    execute(payload: Tinput): Promise<Toutput>;
}