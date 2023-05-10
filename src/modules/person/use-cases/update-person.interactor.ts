import { UseCase } from "@/kernel/contacts";
import { UpdatePersonDto } from "../adapters/dto/update-person";
import { ResponseApi } from "@/kernel/types";
import { Person } from "../entities/person";
import { PersonRepository } from "./ports/person.repository";

export class UpdatePersonInteractor implements UseCase <UpdatePersonDto, ResponseApi<Person>> {
    constructor(private readonly personRepository: PersonRepository) {}

    execute(payload: UpdatePersonDto): Promise<ResponseApi<Person>> {
        return this.personRepository.updatePerson(payload);
    }
}