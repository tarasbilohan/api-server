import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import * as compression from 'compression';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions =
    fs.existsSync('./var/private-key.pem') &&
    fs.existsSync('./var/public-certificate.pem')
      ? {
          key: fs.readFileSync('./var/private-key.pem'),
          cert: fs.readFileSync('./var/public-certificate.pem'),
        }
      : null;

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  const configService = app.get(ConfigService);

  app.setGlobalPrefix(configService.get<string>('app.globalPrefix'));
  app.enableCors();
  app.use(helmet());
  app.use(
    rateLimit({
      windowMs: 1 * 60 * 1000,
      max: 60,
    }),
  );
  app.use(compression());

  const options = new DocumentBuilder()
    .setTitle('API Server')
    .setDescription('Example app for API server')
    .setVersion('1.0')
    .build();

  const apiServerDocument = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, apiServerDocument);

  await app.listen(configService.get<number>('app.port'));
}

bootstrap();
