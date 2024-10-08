import { Injectable } from '@nestjs/common';
import { createUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async handleUserCreated(data: createUserEvent) {
    return console.log('handleUserCreated - COMMUNICATIONS', data);
    //TODO: Email the user...
  }

  getNotificationData(payload: any) {
    try {
      console.log('get-analytics says hello', payload);
      const shouldNotify = {};
      const nSubscriberInQueue = parseInt(payload.subscriberCount) - 5;
      if (payload.subscriberCount >= 5) {
        shouldNotify['message'] =
          `Sorry For inconvinence but your subscriber limit has reached ${payload.subscriberCount}. ${nSubscriberInQueue} of your subscribers were rejected. Upgarade your limit in our platform or by clicking the below link `;
        shouldNotify['shouldNotify'] = payload.shouldNotify;
      } else {
        shouldNotify['message'] =
          `Congratulations.Now your subscriber count is ${payload.subscriberCount}. Increase your leads and subscriber by joining our Life Jinga la la Event`;
        shouldNotify['shouldNotify'] = payload.shouldNotify;
      }
      return shouldNotify;
    } catch (oError) {
      throw oError;
    }
  }

  async fetchInvoiceEmailBody(data: any) {
    try {
      console.log('email sent successfully', data.price);
      return `Your payment is successfull.Email has been sent to you.You will find there your invoice for purchase of ${data.price}`;
    } catch (oError) {
      throw oError;
    }
  }
}
