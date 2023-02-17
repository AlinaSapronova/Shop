import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import Description from "./Description";
import PictureSlide from "./PictureSlide";
import { addItemToCart } from "../../redux/cartSlice";

const Product = ({item}) => {
const [quantity, setQuantity] = useState(1);
const dispatch = useDispatch(addItemToCart())

    return(
   
         <div className="babyStaff">

           <p className="name">{item.name}</p>

          <PictureSlide item={item}/>

          <p className="footnote">All pictures and information are taken from the H&M website</p>

        <p>Price: ${item.price}</p>

      <Description item={item}/>

      <p>Size:</p>

     <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
     
      <button onClick={() => {dispatch(addItemToCart({item,quantity}))}}>Add to cart</button>
     
     </div>
    
    )
}
export default Product;