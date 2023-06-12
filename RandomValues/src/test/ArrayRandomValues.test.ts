import ArrayRandomValues from "../ArrayRandomValues";
import Products from "../Products";

describe("Validar a randomização do produto", () => {
    it("Deve randomizar a array de produtos", () => {

        const pList: Products[] = [
            new Products("Caneta", 7.99, 10),
            new Products("Impressora", 649.50, 0),
            new Products("Caderno", 27.10, 4),
            new Products("Lapis", 5.82, 3),
            new Products("Tesoura", 19.99, 1),
            new Products("Mochila", 150.99, 6),
            new Products("Teclado", 500.99, 4),
            new Products("Mouse", 78.99 , 3),
            new Products("Tenis", 350.99, 2),
            new Products("Meias", 19.99 , 10)
        ]
        const arrayRandomValues = new ArrayRandomValues(pList)

        const pListRandom1 = arrayRandomValues.getProductList()
        
        expect(pListRandom1 == pList).toBeFalsy()
    })
})