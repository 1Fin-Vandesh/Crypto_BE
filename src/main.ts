import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ExceptionInterceptor } from './utils/interceptors/exception-interceptor';


async function bootstrap() {

  // Create the NestJS application
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Crypto API')
    .setDescription('The API for crypto')
    .setVersion('1.0')
    .addBearerAuth()
    .setExternalDoc('Crypto Json Collection', '/api-json')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Enable validation globally
  app.useGlobalPipes(new ValidationPipe({whitelist: true,}));
  
  // app.useGlobalInterceptors(new ExceptionInterceptor());


  await app.listen(process.env.PORT || 3000);
}
bootstrap();
