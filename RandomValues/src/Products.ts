export default class Products {
    Name: String
    Price: Number
    Quantity: Number

    constructor(Name: String, Price: Number, Quantity: Number) {
        this.Name = Name
        this.Price = Price
        this.Quantity = Quantity
    }

    public getName(){
        return this.Name
    }
    public setName(Name: String) {
        this.Name = Name
    }

    public getPrice(){
        return this.Price
    }
    public setPrice(Price: Number) {
        this.Price = Price
    }

    public getQuantity(){
        return this.Quantity
    }
    public setQuantity(Quantity: Number) {
        this.Quantity = Quantity
    }
}