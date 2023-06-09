import { User } from "../login/users";

export class OrderSummary {
    orderId?: string;
    orderDateTime?: string;
    total?: number;
    orderStatus?: string;
    paymentStatus?: string;
    userId?: string;
    comment?: string;
    rating?: string;
    customer?: User;
}