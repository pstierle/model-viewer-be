import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class PointOfInterest {
  @PrimaryColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  x: string;

  @Column()
  y: string;

  @Column()
  z: string;

  @Column()
  modelId: number;

  @Column()
  description: string;
}
