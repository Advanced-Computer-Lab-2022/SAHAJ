import { useEffect , useState} from "react"
//components
import CourseDetails from '../components/CourseDetails'
import Country from "../components/Country"
import FilterSubjectRate from "../components/FilterSubjectRate"
//import AddCourseForm from '../components/AddCourseForm'
const Guest = () =>{
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
                <button onClick={event =>  window.location.href='/filterSubjectRate'} >Filter All courses by subject or rate</button>
                <button onClick={event =>  window.location.href='/'} >View All Courses</button>
                {/* {courses && courses.map((course) =>(
                    <CourseDetails key={course._id} course = {course} />
                ))} */}
            </div>
        </div>
        
    )
}

export default Guest