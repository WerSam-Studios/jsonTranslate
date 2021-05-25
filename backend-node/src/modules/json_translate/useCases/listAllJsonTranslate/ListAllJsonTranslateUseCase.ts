import { JsonTranslate} from '../../model/JsonTranslate';
import { IJsonsTranstaleRepository} from '../../repositories/IJsonTranslate'

interface IRequest {
    session: string | undefined;
}

class ListAllJsonTranslateUseCase {
    constructor(private jsonRepository : IJsonsTranstaleRepository){}

    execute({session}: IRequest): (JsonTranslate | undefined)[] | undefined {
        return this.jsonRepository.findBySession(session)
    }
}

export {ListAllJsonTranslateUseCase};