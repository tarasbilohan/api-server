import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountryEntity } from './country.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(CountryEntity)
    private countriesRepository: Repository<CountryEntity>,
  ) {}

  async findAll(): Promise<CountryEntity[]> {
    return await this.countriesRepository.find();
  }

  async findOne(id: number): Promise<CountryEntity | null> {
    return await this.countriesRepository.findOne(id);
  }

  async create(country) {
    const newCountry = this.countriesRepository.create();
    newCountry.code = country.code;
    newCountry.name = country.name;
    newCountry.createdAt = new Date();

    return await this.countriesRepository.save(newCountry);
  }

  async update(id: number, country) {
    country.updatedAt = new Date();

    await this.countriesRepository.update(id, country);

    return this.findOne(id);
  }

  async delete(id: number) {
    await this.countriesRepository.delete(id);
  }
}
