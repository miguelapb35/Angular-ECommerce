import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(public itemsMap: { [productId: string]: ShoppingCartItem }) {
        // tslint:disable-next-line:forin
        for (const productId in itemsMap) {
            const item = itemsMap[productId];
            this.items.push(new ShoppingCartItem(item.product, item.quantity));
        }
    }

    getQuantity(product: Product) {
        const item = this.itemsMap[product.key];
        return item ? item.quantity : 0;
    }

    get totalPrice() {
        let sum = 0;
        for (const productId in this.items)
            sum += this.items[productId].totalPrice;
        return sum;
    }

    get totalItemsCount() {
        let count = 0;
        for (const productId in this.itemsMap)
          count += this.itemsMap[productId].quantity;
        return count;
    }
}
