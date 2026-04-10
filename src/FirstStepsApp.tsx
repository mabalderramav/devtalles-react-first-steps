import {ItemCounter} from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const ItemsInCart: ItemInCart[] = [
    {productName: 'Nintendo switch 2', quantity: 1},
    {productName: 'Word ward craft', quantity: 2},
    {productName: 'FIFA 2026', quantity: 3},
    {productName: 'Super Mario 4', quantity: 5},
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Shopping Cart</h1>
            {ItemsInCart.map(({productName, quantity}) => (
                <ItemCounter
                    key={productName}
                    name={productName}
                    quantity={quantity}/>
            ))}
        </>
    )
}