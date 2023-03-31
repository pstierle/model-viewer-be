import { Injectable } from '@nestjs/common';

export interface Model {
  id: number;
  name: string;
  url: string;
}

@Injectable()
export class ModelService {
  private readonly models: Model[] = [
    {
      id: 19478623,
      name: 'Bench',
      url: 'http://localhost:3000/models/19478623.glb',
    },
    {
      id: 24356765,
      name: 'Garden House',
      url: 'http://localhost:3000/models/24356765.glb',
    },
  ];

  findAll() {
    return this.models;
  }

  findOne(id: number) {
    return this.models.find((model) => model.id === id);
  }
}
