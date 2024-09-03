import { AppService } from './app.service';
import { createUserEvent } from './create-user.event';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    handleUserCreated(data: createUserEvent): void;
    getNotificationData(payload: any): Promise<{}>;
}
`Your Order for xyz product is successfull for price ${payload.orderData.price}. Need any more details check this stripeId: ${payload.user.stripeUserId}`;