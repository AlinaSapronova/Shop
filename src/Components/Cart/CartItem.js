import { useDispatch } from "react-redux";
import dataProduct from "../../Data/dataProduct";
import { removeItemFromCart } from "../../redux/cartSlice";
import trash from "./trash.png"

const CartItem = ({cartItem}) => {
    console.log(cartItem)

    const items = dataProduct.find(item => item.id === cartItem.productId)
    const dispatch = useDispatch(removeItemFromCart())

   
    return(
        <div id="cart">
            <p className="cart">{items.name}</p>
            <p className="cart">{cartItem.quantity} item(s)</p>
            <img src={items.image[0]} alt={items.name} width="100px"/>
            <p className="cart">Price: ${items.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img src={trash} alt="trash can" width={30}/>
            </span>
            <hr></hr>
            </div>
    )
    
}
export default CartItem;