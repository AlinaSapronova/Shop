
import dataProduct from "../../Data/dataProduct";
import Product from "./Product";


const Products = () => {

    return(
<div> 
{dataProduct.map(item => <Product item={item} />)}
</div>
    )
}
export default Products;