import { useDispatch, useSelector } from "react-redux";
import { getSelectedAge, filterAge } from "../../redux/productSlice";

const Filter = ({age}) => {

const dispatch = useDispatch();
const selectedAge = useSelector(getSelectedAge);
    return(
        <div className="btn">
            <p onClick={()=> {dispatch(filterAge(age))}}  className={selectedAge === age ? 'ageButtonSelected' : 'ageButton'}>{age}</p>
        </div>

    )
}
export default Filter;