import { Model } from 'src/model/entities/model.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PointOfInterest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  x: string;

  @Column()
  y: string;

  @Column()
  z: string;

  @Column()
  description: string;

  @ManyToOne(() => Model, (model) => model.pointOfInterests)
  model: Model;
}
