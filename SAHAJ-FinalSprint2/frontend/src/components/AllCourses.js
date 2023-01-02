import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { GolfCourse } from '@mui/icons-material'

const AllCourses = (props) => {
    console.log(props)
    const { user } = useAuthContext()
    const params = useParams()
    var id = ""
    var type = ""
    const [courses, setCourses] = useState(null)
    const navigate = useNavigate()
    const arr = [5, 8, 7, 3, 2]
    if (user) {
        id = user.id
        type = user.UserType
    }
    useEffect(() => {

        const fetchCourses = async () => {

            const response = await fetch('/api/course')



            const json = await response.json()



            if (response.ok) {
                console.log(props.filterCourse)
                if (props.filterCourse === "Popular Courses") {
                    setCourses(json.sort((a, b) => b.Enrolled - a.Enrolled))
                }
                if (props.filterCourse === "Rate") {
                    setCourses(json.sort((a, b) => b.Course_overAllRate - a.Course_overAllRate))
                }
                
                if (props.filterCourse === "Highest to lowest price") {
                    setCourses(json.sort((a, b) => b.Course_price - a.Course_price))
                }
                if (props.filterCourse === "Lowest to highest price") {
                    setCourses(json.sort((a, b) => a.Course_price - b.Course_price))
                }
                else {
                    setCourses(json)
                }





            }







        }

        fetchCourses();

    }, [props.filterCourse])
    function Gol(course_id) {
        if (type === "indiv")
            navigate("/individual/course/" + course_id)
        else if (type == "coorp") {
            navigate("/coorprate/course/" + course_id)
        }
        else {
            navigate("/instructor/course/" + course_id)
        }
    }

    return (
        <div className='row'>
            {courses && courses.map((course) => (
                <div className='col-3'>
                    <div className='card'>
                        <img src={course.Course_photo} width="400"
                            height="200" class="card-img-top" alt="..." />
                        <div className='card-body'>
                            <h5 class="card-title">{course.Course_subject}</h5>
                            <p class="card-text">Instructor:{course.Course_instructor_name} <br /> Duration:{course.Course_minuets} minuets <br /> Excercises:{course.Course_excrcise} <br /> Price:{course.Course_price} <br /> Rating:{course.Course_overAllRate}</p>
                            <a onClick={() => Gol(course._id)} class="btn btn-primary" key={course._id}>View Course</a>
                        </div>
                    </div>
                </div>

            ))}

        </div>
    )
}
export default AllCourses