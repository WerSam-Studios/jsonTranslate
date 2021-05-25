import { JsonTranslate} from '../../model/JsonTranslate';
import { IJsonsTranstaleRepository} from '../../repositories/IJsonTranslate'

interface IRequest {
    json_request: string;
    session: string | undefined;
}

class CreateJsonTranslateUseCase {
    constructor(private jsonRepository : IJsonsTranstaleRepository){}

    async execute({session,json_request}: IRequest): Promise<JsonTranslate> {
        return await this.jsonRepository.create({json_request,session})
    }
}

export {CreateJsonTranslateUseCase};