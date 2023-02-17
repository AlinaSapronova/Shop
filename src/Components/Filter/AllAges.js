import Filter from "./Filter";
function AllAges(){
    return(
        
            <div className="categories">
                {['ALL','baby','toddler','kids'].map((age,index )=> <Filter age={age} key={index}/>)}
            </div>
          
        
    )
}
export default AllAges;