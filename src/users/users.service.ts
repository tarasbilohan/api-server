import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private UserRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.UserRepository.find();
  }

  async findOne(id: number): Promise<UserEntity | null> {
    return await this.UserRepository.findOne(id);
  }

  async create(user) {
    //
  }

  async update(id: number, user) {
    //
  }

  async delete(id: number) {
    await this.UserRepository.delete(id);
  }
}
