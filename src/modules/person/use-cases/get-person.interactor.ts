import { UseCase } from "@/kernel/contact";
import { ResponseApi } from "@/kernel/types";
import { Person } from "../entities/person";
import { PersonRepository } from "./ports/person.repository";

export class GetPersonInteractor implements UseCase<number, ResponseApi<Person>> {
    constructor(private readonly repo: PersonRepository) {}

    execute(payload: number): Promise<ResponseApi<Person>> {
        return this.repo.findPerson(payload);
    }
}