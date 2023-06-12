import Product from "./Products"
import ArrayRandomValues from "./ArrayRandomValues";

function main(){
    const productList: Product[] = [
        new Product("Caneta", 5.19, 10),
        new Product("Lapis", 6.00, 9),
        new Product("Apagador", 10.00, 1),
        new Product("Cola", 3.50, 4),
        new Product("Apontador", 1.50, 7),
        new Product("Borracha", 2.30, 5)
    ]

    const arrayRandomValues = new ArrayRandomValues(productList);
    const randomProducts1 = arrayRandomValues.getRandomValuesFromArray(2)
    const randomProducts2 = arrayRandomValues.getRandomValuesFromArray(3)
    const randomProducts3 = arrayRandomValues.getRandomValuesFromArray(5)


    console.log("\n random 1: ")
    randomProducts1.foreach(item => {
        console.log(item.getName())
    })

    console.log("\n random 2: ")
    randomProducts2.foreach(item => {
        console.log(item.getName())
    })

    console.log("\n random 3: ")
    randomProducts3.foreach(item => {
        console.log(item.getName())
    })
}

main()