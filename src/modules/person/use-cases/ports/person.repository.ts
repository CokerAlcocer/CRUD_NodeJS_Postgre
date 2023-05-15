import { ResponseApi } from "@/kernel/types";
import { Person } from "../../entities/person";
import { SavePersonDto } from "../../adapters/dto/save-person";
import { UpdatePersonDto } from "../../adapters/dto/update-person";

export interface PersonRepository {
    findAll(): Promise<ResponseApi<Person>>;
    findPerson(payload: number): Promise<ResponseApi<Person>>;
    savePerson(payload: SavePersonDto): Promise<ResponseApi<Person>>;
    updatePerson(payload: UpdatePersonDto): Promise<ResponseApi<Person>>;
}