"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
    async handleUserCreated(data) {
        return console.log('handleUserCreated - COMMUNICATIONS', data);
    }
    getNotificationData(payload) {
        try {
            console.log('get-analytics says hello', payload);
            const shouldNotify = {};
            const nSubscriberInQueue = parseInt(payload.subscriberCount) - 5;
            if (payload.subscriberCount >= 5) {
                shouldNotify['message'] =
                    `Sorry For inconvinence but your subscriber limit has reached ${payload.subscriberCount}. ${nSubscriberInQueue} of your subscribers were rejected. Upgarade your limit in our platform or by clicking the below link `;
                shouldNotify['shouldNotify'] = payload.shouldNotify;
            }
            else {
                shouldNotify['message'] =
                    `Congratulations.Now your subscriber count is ${payload.subscriberCount}. Increase your leads and subscriber by joining our Life Jinga la la Event`;
                shouldNotify['shouldNotify'] = payload.shouldNotify;
            }
            return shouldNotify;
        }
        catch (oError) {
            throw oError;
        }
    }
    async fetchInvoiceEmailBody(data) {
        try {
            console.log('email sent successfully', data);
            return await `Your payment is successfull for price ${data.price}`;
        }
        catch (oError) {
            throw oError;
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map