import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Model } from 'src/model/entities/model.entity';
import { PointOfInterest } from 'src/point-of-interest/entities/point-of-interest.entity';
import { DataSource } from 'typeorm';
import { CreatePointOfInterestDto } from './dto/create-point-of-interest.dto';

@Injectable()
export class PointOfInterestService {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource
  ) {}

  async create(createPointOfInterestDto: CreatePointOfInterestDto): Promise<PointOfInterest> {
    const model = await this.dataSource.manager.findOne(Model, {
      where: {
        id: createPointOfInterestDto.modelId,
      },
    });
    if (model) {
      const pointOfInterest = new PointOfInterest();

      pointOfInterest.description = createPointOfInterestDto.description;
      pointOfInterest.model = model;
      pointOfInterest.x = createPointOfInterestDto.x;
      pointOfInterest.y = createPointOfInterestDto.y;
      pointOfInterest.z = createPointOfInterestDto.z;

      const saved = await this.dataSource.manager.save(pointOfInterest);
      return saved;
    } else {
      return null;
    }
  }

  findByModelId(modelId: string): Promise<PointOfInterest[]> {
    return this.dataSource.manager.find(PointOfInterest, {
      where: {
        model: {
          id: modelId,
        },
      },
    });
  }
}
