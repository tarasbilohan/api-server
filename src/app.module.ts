import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configModuleOptions from './config';
import typeOrmModuleOptions from './database';
import { CountriesModule } from './countries/countries.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    TypeOrmModule.forRootAsync(typeOrmModuleOptions),
    CountriesModule,
    UsersModule,
  ],
})
export class AppModule {}
