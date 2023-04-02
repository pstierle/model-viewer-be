import { Model } from './model.entity';
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

  @Column({
    nullable: true,
  })
  name: string;

  @Column({
    nullable: true,
  })
  description: string;

  @ManyToOne(() => Model, (model) => model.pointOfInterests)
  model: Model;
}
