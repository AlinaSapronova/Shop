import { useState } from "react";
import dataProduct from "../../Data/dataProduct";


function Description(){
    const [clothes,setClothes] = useState(dataProduct);
    const description = (id) =>{
        const newClothes = []
        clothes.forEach(item=>{
            if(item.id === id){
                const chenchedId ={...item, showMore: !item.showMore};
                newClothes.push(chenchedId)
            }else{
                newClothes.push(item)
            }
        })
        setClothes(newClothes)
    }
    return(
        <div>
            {clothes.map(item => {
                const{id, details,showMore} = item;
                return(
                    <div key={id}><p>{showMore ? details : details.substring(0, 30) + "... "}
                    <button className="showMore" onClick={() => description(id)}> {showMore ? "Less details" : "More details" }</button></p>
                    </div>
                )
                })}
    
        </div>
    )
}
export default Description;