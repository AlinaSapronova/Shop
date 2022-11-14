import Description from "./Description";
import PictureSlide from "./PictureSlide";

const Product = ({item,id}) => {


    return(<div className="babyStaff" key={id} >
         
          <PictureSlide numberProduct={id}/>

          <p className="footnote">All pictures and information are taken from the H&M website</p>

        <p>Price: ${item.price}</p>

        <p>{item.name}</p>

      <Description/>
     </div>
    
    )
}
export default Product;