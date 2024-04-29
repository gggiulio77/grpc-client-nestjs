import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { AppService } from './app.service';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);

    const client = app.get<AppService>(AppService);

    const response = await client.sayHello();

    response.subscribe((value) => {
        console.log(value);
    });
}

bootstrap();
