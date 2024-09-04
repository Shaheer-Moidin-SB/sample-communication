import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  EventPattern,
  MessagePattern,
  RpcException,
  Transport,
} from '@nestjs/microservices';
import { createUserEvent } from './create-user.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_created', Transport.TCP)
  handleUserCreated(data: createUserEvent) {
    this.appService.handleUserCreated(data);
  }

  @MessagePattern({ cmd: 'send_notification' }, Transport.TCP)
  async getNotificationData(payload: any) {
    try {
      console.log('getNotificationData controller says hello');
      return await this.appService.getNotificationData(payload);
    } catch (error) {
      console.error('Error in getNotificationData:', error);
      throw new RpcException('Failed to get Notification Data');
    }
  }

  @MessagePattern('send.invoice', Transport.KAFKA)
  async fetchInvoiceEmailBody(data: any) {
    return await this.appService.fetchInvoiceEmailBody(data);
  }
}
