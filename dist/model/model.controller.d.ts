/// <reference types="multer" />
import { CreateModelDto } from 'src/model/dto/create-model.dto';
import { Model } from 'src/model/entities/model.entity';
import { ModelService } from './model.service';
export declare class ModelController {
    private readonly modelService;
    constructor(modelService: ModelService);
    findByUserId(userId: string): Promise<Model[]>;
    findOne(id: string): Promise<Model>;
    createModel(createModelDto: CreateModelDto): Promise<Model>;
    uploadFile(file: Express.Multer.File): string;
}
