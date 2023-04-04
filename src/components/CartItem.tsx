import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurreny } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps){
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(i=> i.id === id)
        if(item == null) return null
    
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imageUrl} style={{width: "100px", height: "auto"}} />
            <div className="me-auto">
                <div>
                    {item.productName} {quantity > 1 && <span style={{fontSize: ".8rem"}} className="text-muted">x{quantity}</span>}
                </div>
                <div style={{fontSize: ".8rem"}} className="text-muted">
                    {formatCurreny(item.price)}
                </div>
            </div>
            <div>{formatCurreny(item.price * quantity)}</div>
                <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}