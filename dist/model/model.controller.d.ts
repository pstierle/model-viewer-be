import { Model, ModelService } from './model.service';
export declare class ModelController {
    private readonly modelService;
    constructor(modelService: ModelService);
    findAll(): Model[];
    findOne(id: string): Model;
}
