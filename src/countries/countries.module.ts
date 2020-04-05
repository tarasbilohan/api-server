import { Module } from '@nestjs/common';
import { CountriesController } from 'src/countries/countries.controller';
import { CountriesService } from 'src/countries/countries.service';

@Module({
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}
