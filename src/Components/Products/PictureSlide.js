
import { useState } from "react";


function PictureSlide(props){
  
    const [pictureIndex, setPictureIndex] = useState(0);

    const previous=()=>{
        setPictureIndex((pictureIndex =>{
            pictureIndex--;
        if (pictureIndex < 0){
            pictureIndex = props.item.image.length-1
        }
        return pictureIndex
    }))
    }

    const next=()=>{
        setPictureIndex((pictureIndex => {
            pictureIndex++;
        if (pictureIndex > props.item.image.length-1){
            pictureIndex = 0
        }
        return pictureIndex
    }))
    }
    return(
        <div className="pictureContainer">
            <button className="pictureBtn" onClick={previous}><i class="bi bi-arrow-left-short"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg></i></button>
            <img className="babyimg" src={props.item.image[pictureIndex]} alt='img'/>
            <button className="pictureBtn" onClick={next}><i class="bi bi-arrow-right-short"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg></i></button>
        </div>
    )
}
export default PictureSlide;