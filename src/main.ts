import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const tcpService = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: { port: 3001 },
    },
  );

  // Kafka Microservice
  const kafkaService =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'send',
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'send-consumer',
        },
      },
    });

  //start both the services
  await kafkaService.listen();
  await tcpService.listen();
}
bootstrap();
