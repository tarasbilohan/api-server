import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

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
  firstName: string;

  @Column({
    name: 'last_name',
  })
  lastName: string;

  @Exclude()
  plainPassword: string;

  @Column({
    name: 'password',
  })
  @Exclude()
  password: string;

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

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
