import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Model } from 'src/entity/entities/model.entity';
import { User } from 'src/entity/entities/user.entity';
import { CreateModelDto } from 'src/model/dto/create-model.dto';
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

  public async delete(id: string): Promise<void> {
    const found = await this.dataSource.manager.findOne(Model, {
      relations: ['pointOfInterests'],
      where: { id },
    });

    if (!!found) {
      await this.dataSource.manager.remove(found.pointOfInterests);
      await this.dataSource.manager.remove(found);
    } else {
      throw new HttpException(
        'No Model found with given id!',
        HttpStatus.NOT_FOUND
      );
    }
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
