import { useEffect , useState} from "react"
import Home from "./Home"
import FilterSubjectRate from "../components/FilterSubjectRate"

const IndividualTrainee = ()=>{
return(
    <div className="Instructor"> 
        {/* <Home />
        <FilterSubjectRate/> */}
            <button onClick={event =>  window.location.href='/'} >View All Courses</button>
            <button onClick={event =>  window.location.href='/filterSubjectRate'} >Filter All courses by subject or rate</button>



    </div>
    
)
}
export default IndividualTrainee
