import { ResponseApi } from "@/kernel/types";
import { Person } from "../entities/person";
import { PersonRepository } from "../use-cases/ports/person.repository";
import { SavePersonDto } from "./dto/save-person";
import { UpdatePersonDto } from "./dto/update-person";

export class PersonStorageGateway implements PersonRepository {
    getError(): ResponseApi<Person> {
        return {
            code: 500,
            error: true,
            message: 'INTERNAL ERROR SERVER'
        } as ResponseApi<Person>;
    }

    async findAll(): Promise<ResponseApi<Person>> {
        return await fetch('http://localhost:3000/user').then(data => data.json())
        .then(({data}) => {
            return {
                code: 200,
                message: 'OK',
                entities: data,
                count: data.length
            } as ResponseApi<Person>;
        }).catch(() => this.getError());
    }
    async findPerson(payload: number): Promise<ResponseApi<Person>> {
        return await fetch(`http://localhost:3000/user/${payload}`).then(data => data.json())
        .then(({data}) => {
            return {
                code: 200,
                error: false,
                message: 'OK',
                entity: data
            } as ResponseApi<Person>;
        }).catch(() => this.getError());
    }
    async savePerson(payload: SavePersonDto): Promise<ResponseApi<Person>> {
        return await fetch('http://localhost:3000/user', {
            method: 'POST', 
            body: JSON.stringify(payload), 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json()).then(() => {
            return {
                code: 200,
                error: false,
                message: 'PERSON REGISTERED'
            } as ResponseApi<Person>;
        }).catch(() => this.getError());
    }
    async updatePerson(payload: UpdatePersonDto): Promise<ResponseApi<Person>> {
        return await fetch(`http://localhost:3000/user/${payload.id}`, {
            method: 'PUT', 
            body: JSON.stringify(payload), 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json()).then(() => {
            return {
                code: 200,
                error: false,
                message: "PERSON UPDATED"
            } as ResponseApi<Person>;
        }).catch(() => this.getError());
    }
}