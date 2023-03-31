import { CreateModelDto } from 'src/model/dto/create-model.dto';
import { Model } from 'src/model/entities/model.entity';
import { DataSource } from 'typeorm';
export declare class ModelService {
    private dataSource;
    constructor(dataSource: DataSource);
    findByUserId(userId: string): Promise<Model[]>;
    findOne(id: string): Promise<Model>;
    createOne(createModelDto: CreateModelDto): Promise<Model>;
}
