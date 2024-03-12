interface IProduct{
    name: string;
    price: number;
    quantity: number;
calculateTotalPrice(): void;
displayProductInfo(): void;
}
export{IProduct}