import { User } from 'src/auth/entities/user.entity';
import { PointOfInterest } from 'src/point-of-interest/entities/point-of-interest.entity';
import { Util } from 'src/util/util';
import { AfterLoad, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Model {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.models)
  user: User;

  @OneToMany(() => PointOfInterest, (poi) => poi.model)
  pointOfInterests: PointOfInterest[];

  url: string;

  @AfterLoad()
  loadUrl() {
    this.url = Util.modelUrl(this.id, this.userId);
  }
}
