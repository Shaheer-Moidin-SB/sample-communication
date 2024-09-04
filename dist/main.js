"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const tcpService = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.TCP,
        options: { port: 3001 },
    });
    const kafkaService = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.KAFKA,
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
    await kafkaService.listen();
    await tcpService.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map