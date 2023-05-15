import { ResponseApi } from "../../../kernel/types";
import { Person } from "../entities/person";
import { PersonRepository } from "../use-cases/ports/person.repository.js";
import { SavePersonDto } from "./dto/save-person";
import { UpdatePersonDto } from "./dto/update-person";
import { pool } from '../../../kernel/database.js';

export class PersonStorageGateway implements PersonRepository {
    async findAll(): Promise<ResponseApi<Person>> {
        let response = {};
        await pool.query("").then(res => {
            response = {
                code: 200
            }
        }).catch(() => console.log("INTERNAL SERVER ERROR"));

        return response as ResponseApi<Person>;
    }
    findPerson(payload: number): Promise<ResponseApi<Person>> {
        throw new Error("Method not implemented.");
    }
    savePerson(payload: SavePersonDto): Promise<ResponseApi<Person>> {
        throw new Error("Method not implemented.");
    }
    updatePerson(payload: UpdatePersonDto): Promise<ResponseApi<Person>> {
        throw new Error("Method not implemented.");
    }

}