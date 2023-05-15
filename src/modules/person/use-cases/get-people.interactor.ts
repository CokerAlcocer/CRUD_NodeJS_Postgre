import { UseCase } from "@/kernel/contact";
import { Person } from "../entities/person";
import { ResponseApi } from "@/kernel/types";
import { PersonRepository } from "./ports/person.repository";

export class GetPeopleInteractor implements UseCase<null, ResponseApi<Person>> {
    constructor(private readonly repo: PersonRepository) {}

    execute(): Promise<ResponseApi<Person>> {
        return this.repo.findAll();
    }
}