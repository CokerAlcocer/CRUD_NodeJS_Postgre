import { UseCase } from "@/kernel/contacts";
import { GetPeopleDto } from "../adapters/dto/get-people";
import { ResponseApi } from "@/kernel/types";
import { Person } from "../entities/person";
import { PersonRepository } from "./ports/person.repository";

export class GetPersonInteractor implements UseCase<number, ResponseApi<Person>> {
    constructor(private readonly personRepository: PersonRepository){}

    execute(payload: number): Promise<ResponseApi<Person>> {
        return this.personRepository.findPerson(payload);
    }
}