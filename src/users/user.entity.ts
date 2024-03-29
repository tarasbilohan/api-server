import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity({
  name: 'users',
})
@Unique(['email'])
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
    length: 255,
  })
  firstName: string;

  @Column({
    name: 'last_name',
    length: 255,
  })
  lastName: string;

  @Exclude()
  plainPassword: string;

  @Column({
    name: 'password',
    length: 255,
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
