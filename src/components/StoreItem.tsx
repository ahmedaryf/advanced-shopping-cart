
import { Button, Card} from 'react-bootstrap'
import { formatCurreny } from '../utilities/formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'

type StoreItemProps = {
    id: number,
    productName: string,
    price: number,
    imageUrl: string
}
export function StoreItem({id, productName, price, imageUrl}: StoreItemProps) {
  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div>
        <Card className='d-flex align-items-center h-100'>
            <Card.Img variant='top' src={imageUrl} height="200px" style={{width:"250px", objectFit: "cover"}}/>
            <Card.Body className='d-flex flex-column'>
              <Card.Title className='d-flex justify-content-around align-items-baseline mb-4'>
                <span className='fs-2'>{productName}</span>
                <span className='ms-2 text-muted'>{price}</span>
              </Card.Title>
              <div className='mt-auto'>
                {quantity === 0 ? (
                  <Button className='w-100' onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button>
                ): <div className='d-flex align-items-center flex-column' style={{gap: ".5rem"}}>
                    <div className='d-flex align-items-center justify-content-center' style={{gap: ".5rem"}}>
                     <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                      <div>
                        <span className='fs-3'>{quantity}</span> in cart
                      </div>
                     <Button onClick={() => increaseCartQuantity(id)} >+</Button>
                    </div>
                    <Button onClick={() => removeFromCart(id)} variant='danger' size='sm'>Remove</Button>
                  </div>}
              </div>
            </Card.Body>
        </Card>
    </div>
  )
}

