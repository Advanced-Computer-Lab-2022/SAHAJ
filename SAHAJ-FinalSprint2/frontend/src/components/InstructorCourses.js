import { useState, useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
const InstructorCourses = () => {
    const { user } = useAuthContext()
    var insid = ""
    const [courses, setCourses] = useState([])
    const [instructor, setinstructor] = useState(null)
    if (user) {
        insid = user.id
    }
    useEffect(() => {

        const fetchCourses = async () => {
            const response = await fetch('/api/course')
            const json = await response.json()
            if (response.ok) {

                // setCourses(json)
                console.log()
                setCourses(json.filter(course => { return course.Course_instructor_id === insid }))

            }
        }
        const fetchtheinstructor = async () => {
            const response = await fetch('/api/instructor/' + insid)
            const json = await response.json()
            if (response.ok) {

                setinstructor(json)

            }
        }
        if (user && user.id !== null) {
            fetchtheinstructor();
            fetchCourses();
        }     



    }, [user])


    return (


        <div className='row'>
            <nav class="navbar bg-body-tertiary  navbar-expand-lg bg-dark navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/instructor">E-Learning <i class="bi bi-book-half"></i></a>
                </div>
            </nav>
            {courses && courses.map((course) => (
                <div className='col-3'>
                    <div className='card'>
                        <img src={course.Course_photo} class="card-img-top" alt="..." />
                        <div className='card-body'>
                            <h5 class="card-title">{course.Course_subject}</h5>
                            <p class="card-text">Instructor:{course.Course_instructor_name} <br /> Duration:{course.Course_minuets} minuets <br /> Excercises:{course.Course_excrcise} <br /> Price:{course.Course_price} <br /> Rating:{course.Course_overAllRate}</p>
                            <a onClick={() => window.location.href = `${course._id}/viewcreviews`} class="btn btn-primary" key={course._id}>View Course</a>
                        </div>
                    </div>
                </div>

            ))}

        </div>


    )


}
export default InstructorCourses