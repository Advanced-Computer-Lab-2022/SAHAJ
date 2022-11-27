import { useEffect , useState} from "react"
import CourseDetailsCoorp from "../components/CourseDetailsCoorp"
import Country from "../components/Country"
const CoorprateTrainee = ()=>{
    const [courses , setCourses] = useState(null)
    useEffect(() =>{
        const fetchCourses = async () =>{
            const response = await fetch('/api/course')
            const json = await response.json()

            if(response.ok){
                setCourses(json)
            }
        }
        fetchCourses();
    },[])
return(
    <div className="Coorp"> 
        <Country/>
        {courses && courses.map((course) =>(
                    <CourseDetailsCoorp key={course._id} course = {course} />   
         ))}
    </div>
    
)
}
export default CoorprateTrainee
