import { JsonRepository } from '../../repositories/implementations/JsonTranslateRepository';
import {ListAllJsonTranslateController} from './ListAllJsonTranslateController';
import {ListAllJsonTranslateUseCase } from './ListAllJsonTranslateUseCase';

const jsonTranslateRepository = JsonRepository.getInstance();
const listAllJsonTranslateUseCase = new ListAllJsonTranslateUseCase(jsonTranslateRepository)
const listAllJsonTranslateController = new ListAllJsonTranslateController(listAllJsonTranslateUseCase)

export { listAllJsonTranslateController }