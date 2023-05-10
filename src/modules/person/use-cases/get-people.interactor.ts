import { UseCase } from "@/kernel/contacts";
import { GetPeopleDto } from "../adapters/dto/get-people";
import { ResponseApi } from "@/kernel/types";
import { Person } from "../entities/person";
import { PersonRepository } from "./ports/person.repository";

export class GetPeopleInteractor implements UseCase<GetPeopleDto, ResponseApi<Person>> {
    constructor(private readonly personRepository: PersonRepository){}

    execute(): Promise<ResponseApi<Person>> {
        return this.personRepository.findAll();
    }
}