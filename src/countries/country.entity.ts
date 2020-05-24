import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeUpdate,
  Unique,
} from 'typeorm';

@Entity({
  name: 'countries',
})
@Unique(['code'])
@Unique(['name'])
export class CountryEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column({
    name: 'code',
    length: 2,
  })
  code: string;

  @Column({
    name: 'name',
    length: 255,
  })
  name: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt?: Date | null;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt?: Date | null;

  @Column({
    name: 'deleted_at',
    type: 'datetime',
    nullable: true,
  })
  deletedAt?: Date | null;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}
