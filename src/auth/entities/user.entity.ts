import { Model } from 'src/model/entities/model.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Model, (model) => model.user)
  models: Model[];
}
