import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCountryDto } from 'src/countries/dto/create-country.dto';
import { UpdateCountryDto } from 'src/countries/dto/update-country.dto';
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

  async create(countryData: CreateCountryDto) {
    const newCountry = new CountryEntity();
    newCountry.code = countryData.code;
    newCountry.name = countryData.name;

    return await this.countriesRepository.save(newCountry);
  }

  async update(id: number, countryData: UpdateCountryDto) {
    const toUpdateCountry = await this.countriesRepository.findOne(id);
    toUpdateCountry.code = countryData.code;
    toUpdateCountry.name = countryData.name;

    return await this.countriesRepository.update(id, toUpdateCountry);
  }

  async delete(id: number) {
    return await this.countriesRepository.delete(id);
  }
}
