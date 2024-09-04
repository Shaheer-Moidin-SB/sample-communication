import { createUserEvent } from './create-user.event';
export declare class AppService {
    getHello(): string;
    handleUserCreated(data: createUserEvent): Promise<void>;
    getNotificationData(payload: any): {};
    fetchInvoiceEmailBody(data: any): Promise<string>;
}
