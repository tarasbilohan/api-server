import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

const typeOrmModuleOptions: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get<string>('db.host'),
    port: configService.get<number>('db.port'),
    username: configService.get<string>('db.user'),
    password: configService.get<string>('db.password'),
    database: configService.get<string>('db.database'),
    autoLoadEntities: true,
    entities: [__dirname + '/**/*.entity.ts'],
    synchronize: configService.get<boolean>('db.synchronize'),
  }),
  inject: [ConfigService],
};

export default typeOrmModuleOptions;
