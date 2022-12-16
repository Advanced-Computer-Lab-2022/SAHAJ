import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const AllCourses = () => {
    const params = useParams()
    const id = params.id
    const [courses, setCourses] = useState(null)
    useEffect(() => {

        const fetchCourses = async () => {

            const response = await fetch('/api/course')



            const json = await response.json()



            if (response.ok) {

                setCourses(json)




            }







        }

        fetchCourses();

    }, [])


    return (
        <div className='row'>
            {courses && courses.map((course) => (
                <div className='col-3'>
                    <div className='card'>
                        <img src={course.Course_photo} class="card-img-top" alt="..." />
                        <div className='card-body'>
                            <h5 class="card-title">{course.Course_subject}</h5>
                            <p class="card-text">Instructor:{course.Course_instructor_name} <br /> Duration:{course.Course_minuets} minuets <br /> Excercises:{course.Course_excrcise} <br /> Price:{course.Course_price} <br /> Rating:{course.Course_overAllRate}</p>
                            <a onClick={() => window.location.href = `${id}/course/${course._id}`} class="btn btn-primary" key={course._id}>View Course</a>
                        </div>
                    </div>
                </div>

            ))}
            
        </div>
    )
}
export default AllCourses