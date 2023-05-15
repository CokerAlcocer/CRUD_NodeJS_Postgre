import { Request, Response, Router } from 'express';
import { PersonRepository } from '../use-cases/ports/person.repository';
import { PersonStorageGateway } from './person.storage.gateway.js';
import { GetPeopleInteractor } from '../use-cases/get-people.interactor.js';
import { ResponseApi } from '@/kernel/types';
import { Person } from '../entities/person';
const personRouter = Router();

export class PersonController {
    static findAll = async (req: Request, res: Response) => {
        const repo: PersonRepository = new PersonStorageGateway();
        const interactor: GetPeopleInteractor = new GetPeopleInteractor(repo);
    
        let list = await interactor.execute();
        console.log('1');
    
        return res.json({
            code: 200
        } as ResponseApi<Person>);
    }
}

personRouter.get('', PersonController.findAll);

export default personRouter;