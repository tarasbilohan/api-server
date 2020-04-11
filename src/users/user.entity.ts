import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column({
    name: 'email',
  })
  email: string;

  @Column({
    name: 'first_name',
  })
  first_name: string;

  @Column({
    name: 'last_name',
  })
  last_name: string;

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
