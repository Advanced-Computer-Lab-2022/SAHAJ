import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Search = () => {

    const [course, setCourse] = useState([])
    const [Course_instructor_name, setCourse_instructor_name] = useState("")
    const [Course_subject, setCourse_subject] = useState("")
    const params = useParams()
    const id = params.id
    const search = params.name


    useEffect(() => {
        const fetchcourse = async () => {

            const response = await fetch('/api/course/')

            const json = await response.json()

            if (response.ok) {

                setCourse(json.filter(c => { return c.Course_instructor_name.toLowerCase().includes(search) || c.Course_subject.toLowerCase().includes(search) }))
            }

        }
        fetchcourse();

    }, [])


    return (
        <div className='row'>
            {course && course.map((course) => (
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
    );
}
export default Search