import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Model } from 'src/entity/entities/model.entity';
import { PointOfInterest } from 'src/entity/entities/point-of-interest.entity';
import { DataSource } from 'typeorm';
import { CreatePointOfInterestDto } from './dto/create-point-of-interest.dto';
import { UpdatePointOfInterestDto } from './dto/update-point-of-interest.dto';

@Injectable()
export class PointOfInterestService {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource
  ) {}

  public async create(
    createPointOfInterestDto: CreatePointOfInterestDto
  ): Promise<PointOfInterest> {
    const model = await this.dataSource.manager.findOne(Model, {
      where: {
        id: createPointOfInterestDto.modelId,
      },
    });
    if (model) {
      const pointOfInterest = new PointOfInterest();
      pointOfInterest.model = model;
      pointOfInterest.x = createPointOfInterestDto.x;
      pointOfInterest.y = createPointOfInterestDto.y;
      pointOfInterest.z = createPointOfInterestDto.z;

      const saved = await this.dataSource.manager.save(pointOfInterest);
      return saved;
    } else {
      throw new HttpException(
        'No model found with given id!',
        HttpStatus.NOT_FOUND
      );
    }
  }

  public findByModelId(modelId: string): Promise<PointOfInterest[]> {
    return this.dataSource.manager.find(PointOfInterest, {
      where: {
        model: {
          id: modelId,
        },
      },
    });
  }

  public async delete(id: string): Promise<void> {
    const found = await this.dataSource.manager.findOne(PointOfInterest, {
      where: { id },
    });

    if (!!found) {
      await this.dataSource.manager.remove(found);
    } else {
      throw new HttpException(
        'No point of interest found with given id!',
        HttpStatus.NOT_FOUND
      );
    }
  }

  public async update(
    updatePointOfInterestDto: UpdatePointOfInterestDto
  ): Promise<PointOfInterest> {
    const found = await this.dataSource.manager.findOne(PointOfInterest, {
      where: {
        id: updatePointOfInterestDto.id,
      },
    });

    if (!!found) {
      found.name = updatePointOfInterestDto.name;
      found.description = updatePointOfInterestDto.description;

      await this.dataSource.manager.save(found);

      return found;
    } else {
      throw new HttpException(
        'No point of interest found with given id!',
        HttpStatus.NOT_FOUND
      );
    }
  }
}
