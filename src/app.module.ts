import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CountriesModule } from './countries/countries.module';
import configModuleOptions from './config';

@Module({
  imports: [ConfigModule.forRoot(configModuleOptions), CountriesModule],
})
export class AppModule {}
