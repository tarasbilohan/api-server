import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'countries',
})
export class CountryEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column({
    name: 'code',
  })
  code: string;

  @Column({
    name: 'name',
  })
  name: string;

  @Column({
    name: 'created_at',
    type: 'datetime',
    nullable: true,
  })
  createdAt?: Date | null;

  @Column({
    name: 'updated_at',
    type: 'datetime',
    nullable: true,
  })
  updatedAt?: Date | null;

  @Column({
    name: 'deleted_at',
    type: 'datetime',
    nullable: true,
  })
  deletedAt?: Date | null;
}
