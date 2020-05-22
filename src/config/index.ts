import * as Joi from '@hapi/joi';
import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';

import appConfig from './app.config';
import authConfig from './auth.config';
import dbConfig from './db.config';

const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: [
    `.env.${process.env.NODE_ENV}.local`,
    `.env.${process.env.NODE_ENV}`,
    '.env.local',
    '.env',
  ],
  load: [appConfig, authConfig, dbConfig],
  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'test')
      .default('development'),

    PORT: Joi.number().default(3000),
    GLOBAL_PREFIX: Joi.string().default('api'),

    DB_HOST: Joi.string().default('localhost'),
    DB_PORT: Joi.number().default(3306),
    DB_USER: Joi.string().default('api_server_dbu'),
    DB_PASSWORD: Joi.string().default('secret'),
    DB_DATABASE: Joi.string().default('api_server_db'),

    SECRET: Joi.string().default('secret'),
  }),
};

export default configModuleOptions;
