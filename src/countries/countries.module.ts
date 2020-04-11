import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { CountryEntity } from './country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CountryEntity])],
  exports: [TypeOrmModule],
  providers: [CountriesService],
  controllers: [CountriesController],
})
export class CountriesModule {}
