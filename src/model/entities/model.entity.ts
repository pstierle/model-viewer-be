import { User } from 'src/auth/entities/user.entity';
import { PointOfInterest } from 'src/point-of-interest/entities/point-of-interest.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Model {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  y: string;

  @Column()
  z: string;

  @Column()
  modelId: number;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.models)
  user: User;

  @OneToMany(() => PointOfInterest, (poi) => poi.model)
  pointOfInterests: PointOfInterest[];
}
