import { UseCase } from "@/kernel/contact";
import { SavePersonDto } from "../adapters/dto/save-person";
import { ResponseApi } from "@/kernel/types";
import { Person } from "../entities/person";
import { PersonRepository } from "./ports/person.repository";

export class SavePersonInteracator implements UseCase<SavePersonDto, ResponseApi<Person>> {
    constructor(private readonly repo: PersonRepository) {}

    execute(payload: SavePersonDto): Promise<ResponseApi<Person>> {
        return this.repo.savePerson(payload);
    }
}