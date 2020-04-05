import { Injectable, NotFoundException } from '@nestjs/common';
import { Country } from './interfaces/country.interface';

@Injectable()
export class CountriesService {
  private countries: Country[] = [
    { id: 1, code: 'UA', name: 'Ukraine' },
    { id: 2, code: 'UK', name: 'United Kingdom' },
    { id: 3, code: 'US', name: 'United States' },
  ];

  private lastId = 3;

  findAll(): Country[] {
    return this.countries;
  }

  findOne(id: number): Country | null {
    return this.countries.find(country => country.id === id) || null;
  }

  create(country: Country) {
    const newCountry = {
      id: ++this.lastId,
      code: country.code,
      name: country.name,
    };

    this.countries.push(newCountry);

    return newCountry;
  }

  update(id: number, country: Country) {
    const originalCountry = this.findOne(id);

    if (typeof originalCountry === 'undefined') {
      throw new NotFoundException();
    }

    originalCountry.code = country.code;
    originalCountry.name = country.name;

    return originalCountry;
  }

  delete(id: number) {
    const index = this.findIndex(id);

    if (index === -1) {
      throw new NotFoundException();
    }

    this.countries.slice(index, 1);
  }

  private findIndex(id: number): number {
    return this.countries.findIndex(country => country.id === id);
  }
}
