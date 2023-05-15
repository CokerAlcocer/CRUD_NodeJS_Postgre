import { UseCase } from "@/kernel/contact";
import { ResponseApi } from "@/kernel/types";
import { Person } from "../entities/person";
import { PersonRepository } from "./ports/person.repository";
import { UpdatePersonDto } from "../adapters/dto/update-person";

export class UpdatePersonInteractor implements UseCase<UpdatePersonDto, ResponseApi<Person>> {
    constructor(private readonly repo: PersonRepository) {}

    execute(payload: UpdatePersonDto): Promise<ResponseApi<Person>> {
        return this.repo.updatePerson(payload);
    }
}