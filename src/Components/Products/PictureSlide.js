
import { useState } from "react";
import dataProduct from "../../Data/dataProduct";


function PictureSlide(props){
    const [picture] = useState(props.numberProduct-1);
    const [pictureArray,setPictureArray] = useState(0)
    const { image } = dataProduct[picture]
    const imageStaff = image[pictureArray]

    const previous=()=>{
        setPictureArray((pictureArray =>{
            pictureArray--;
        if (pictureArray<0){
            pictureArray=image.length-1
        }
        return pictureArray
    }))
    }

    const next=()=>{
        setPictureArray((pictureArray=>{
            pictureArray++;
        if (pictureArray>image.length-1){
            pictureArray=0
        }
        return pictureArray
    }))
    }
    return(
        <div className="pictureContainer">
            <button className="pictureBtn" onClick={previous}><i class="bi bi-arrow-left-short"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg></i></button>
            <img className="babyimg" src={imageStaff} alt='img'/>
            <button className="pictureBtn" onClick={next}><i class="bi bi-arrow-right-short"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg></i></button>
        </div>
    )
}
export default PictureSlide;