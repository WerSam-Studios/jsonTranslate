import { JsonTranslate } from '../model/JsonTranslate';

interface ICreateJsonTranslateDTO {
    json_request : string;
    session : string | undefined;
}


interface IJsonsTranstaleRepository {
    create({json_request,session}: ICreateJsonTranslateDTO): Promise<JsonTranslate>;
    findBySession(session : string | undefined) :(JsonTranslate | undefined)[] | undefined ; 
    list(): JsonTranslate[];
}


export { ICreateJsonTranslateDTO, IJsonsTranstaleRepository};