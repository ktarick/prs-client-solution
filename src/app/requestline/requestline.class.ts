import { Request } from '../request/request.class';
import { Product } from '../product/product.class';


export class Requestline{

    id: number;
    requestId: number;
    request: Request;
    productId: number;
    product: Product;
    quantity: number;

    constructor(
    requestId: number = 0,
    productId: number = 0,
    quantity: number = 1
    ){
        this.requestId = requestId;
        this.productId = productId;
        this.quantity = quantity;
    }
}
