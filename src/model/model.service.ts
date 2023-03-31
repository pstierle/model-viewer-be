import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { CreateModelDto } from 'src/model/dto/create-model.dto';
import { Model } from 'src/model/entities/model.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class ModelService {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource
  ) {}

  public findByUserId(userId: string): Promise<Model[]> {
    return this.dataSource.manager.find(Model, {
      where: {
        user: {
          id: userId,
        },
      },
    });
  }

  public findOne(id: string): Promise<Model> {
    return this.dataSource.manager.findOne(Model, {
      where: {
        id,
      },
    });
  }

  public async createOne(createModelDto: CreateModelDto): Promise<Model> {
    const user = await this.dataSource.manager.findOne(User, {
      where: {
        id: createModelDto.userId,
      },
    });
    if (user) {
      const model = new Model();
      model.name = createModelDto.modelName;
      model.user = user;
      return this.dataSource.manager.save(model);
    }
  }
}
