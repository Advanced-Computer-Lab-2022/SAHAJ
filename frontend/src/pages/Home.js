import { useEffect , useState} from "react"
//components
import CourseDetails from '../components/CourseDetails'
import Country from "../components/Country"
import FilterSubjectRate from "../components/FilterSubjectRate"
//import AddCourseForm from '../components/AddCourseForm'
const Home = () =>{
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
        <div className="home"> 
            <div className="courses">
                <Country/>
                {courses && courses.map((course) =>(
                    <CourseDetails key={course._id} course = {course} />
                ))}
            </div>
        </div>
        
    )
}

export default Home