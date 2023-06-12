import Products from "./Products"
import { ErrorMessages } from "./errorMessage.enum"

export default class ArrayRandomValues {
    public products: Array<Products>

    constructor(arr) {
        this.products = arr
    }

    public getRandomValuesFromArray(randomQuantity: any) {
        if(randomQuantity > this.products.length) return ErrorMessages.INVALID_NUMBER_RANGE
        let randomProducts: any = []

        while(randomProducts.length < randomQuantity) {
            let randomNumber: any = Math.floor(Math.random() * this.products.length)
            if(!randomProducts.includes(this.products[randomNumber])) {
                randomProducts.push(this.products[randomNumber])
            }
        }
        return randomProducts
    }

    public getProductList(): Products[] {
        return this.products
    }
}
