import { UseCase } from "@/kernel/contacts";
import { SavePersonDto } from "../adapters/dto/save-person";
import { ResponseApi } from "@/kernel/types";
import { Person } from "../entities/person";
import { PersonRepository } from "./ports/person.repository";

export class SavePersonInteractor implements UseCase<SavePersonDto, ResponseApi<Person>> {
    constructor(private readonly personRepository: PersonRepository) {}
    execute(payload: SavePersonDto): Promise<ResponseApi<Person>> {
        return this.personRepository.savePerson(payload);
    }
}