
import { useSelector } from "react-redux";
import dataProduct from "../../Data/dataProduct";
import { getSelectedAge } from "../../redux/productSlice";
import Product from "./Product";


const Products = () => {

    const selectedAge = useSelector(getSelectedAge)

    return(
<div className="babyClothes"> 
{dataProduct.filter(item => {
                if(selectedAge === 'ALL') return true
                return selectedAge === item.age;
            }).map((item,index) => <Product item={item} key={index}/>)}
</div>
    )
}
export default Products;