import { useState } from "react";
// import dataProduct from "../../Data/dataProduct";



function Description({item}){
    const {id,showMore,details} = item;
    const [text, setText] = useState(false)

    const showText = (item) => {
        item.showMore = !item.showMore
        setText(!text)
    }

    // const description = (id) =>{
    //     const newClothes = []
    //     clothes.forEach(item => {
    //         if(item.id === id){
    //             const chenchedId ={...item, showMore: !item.showMore};
    //             newClothes.push(chenchedId)
    //         }else{
    //             newClothes.push(item)
    //         }
    //     })
    //     setClothes(newClothes)
    // }
    return(
        <div>
               <div key={id}><p className="details">{showMore ? details : details.substring(0, 30) + "... "}
               <button className="showMore" onClick={() => showText(item)}> {showMore ? "Less details" : "More details" }</button></p>
             </div>
                
        </div>
    )
}
export default Description;