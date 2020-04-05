import * as Joi from '@hapi/joi';
import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';

import appConfig from './app.config';
import databaseConfig from './database.config';

const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: [
    `.env.${process.env.NODE_ENV}.local`,
    `.env.${process.env.NODE_ENV}`,
    '.env.local',
    '.env',
  ],
  load: [appConfig, databaseConfig],
  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'test')
      .default('development'),
    PORT: Joi.number().default(3000),
    GLOBAL_PREFIX: Joi.string().default('api'),
  }),
};

export default configModuleOptions;
