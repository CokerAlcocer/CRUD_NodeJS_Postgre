import { ResponseApi } from "@/kernel/types";
import { GetPeopleInteractor } from "../use-cases/get-people.interactor";
import { PersonRepository } from "../use-cases/ports/person.repository";
import { PersonStorageGateway } from "./people.storage.gateway";
import { Person } from "../entities/person";
import { SavePersonInteractor } from "../use-cases/save-person.interactor";
import { SavePersonDto } from "./dto/save-person";
import { GetPersonInteractor } from "../use-cases/get-person.interactor";
import { UpdatePersonDto } from "./dto/update-person";
import { UpdatePersonInteractor } from "../use-cases/update-person.interactor";

export class PersonController {
    findAllPeople(){
        const repo: PersonRepository = new PersonStorageGateway();
        const interactor: GetPeopleInteractor = new GetPeopleInteractor(repo);

        try {
            return interactor.execute();
        } catch(err) {
            return {
                code: 500,
                message: 'INTERNAL ERROR IN CONTROLLER'
            } as ResponseApi<Person>;
        }
    }

    findPerson(payload: number){
        const repo: PersonRepository = new PersonStorageGateway();
        const interactor: GetPersonInteractor = new GetPersonInteractor(repo);

        try {
            return interactor.execute(payload);
        } catch(err) {
            return {
                code: 500,
                message: 'INTERNAL ERROR IN CONTROLLER'
            } as ResponseApi<Person>;
        }
    }

    save(payload: SavePersonDto) {
        const repo: PersonRepository = new PersonStorageGateway();
        const interactor: SavePersonInteractor = new SavePersonInteractor(repo);

        try {
            return interactor.execute(payload);
        } catch(err) {
            return {
                code: 500,
                message: 'INTERNAL ERROR IN CONTROLLER'
            } as ResponseApi<Person>;
        }
    }

    update(payload: UpdatePersonDto) {
        const repo: PersonRepository = new PersonStorageGateway();
        const interactor: UpdatePersonInteractor = new UpdatePersonInteractor(repo);

        try {
            return interactor.execute(payload);
        } catch(err) {
            return {
                code: 500,
                message: 'INTERNAL ERROR IN CONTROLLER'
            } as ResponseApi<Person>;
        }
    }
}