import { User } from 'src/auth/entities/user.entity';
import { PointOfInterest } from 'src/point-of-interest/entities/point-of-interest.entity';
import { Util } from 'src/util/util';
import { AfterLoad, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Model {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.models)
  user: User;

  @OneToMany(() => PointOfInterest, (poi) => poi.model)
  pointOfInterests: PointOfInterest[];

  url: string;

  @AfterLoad()
  loadUrl() {
    this.url = Util.modelUrl(this.id, this.user.id);
  }
}
