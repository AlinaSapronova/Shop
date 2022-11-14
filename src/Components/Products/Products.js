
import dataProduct from "../../Data/dataProduct";
import Product from "./Product";


const Products = () => {

    return(
<div> 
{dataProduct.map((item,id) => <Product item={item} key={id}/>)}
</div>
    )
}
export default Products;