import { Alert } from 'bootstrap'
import { useState, useEffect } from 'react'
import { HiSaveAs } from 'react-icons/hi'
import { Navigate, useParams } from 'react-router-dom'
const NotRegCoorp = () => {
    const params = useParams()
    const cid = params.idC
    const id = params.id
    const [coursescoorp, setCoursescoorp] = useState([])
    const [courses, setCourses] = useState([])
    const [price, setPrice] = useState(false)
    var [Registered_Course, setReg] = useState([])
    var [show, setshow] = useState(false)
    const loc = "coorp/mycourses/course/" + cid
    const [show3, setshow3] = useState(false)
    const [admin , setadmin] = useState([])
    useEffect(() => {
        const fetchCourses = async () => {

            const response = await fetch('/api/course')

            const json = await response.json()

            if (response.ok) {

                setCourses(json.filter(c => { return c._id === cid }))
                setPrice(json.filter(c => { return c._id === cid })[0].Course_price)
                console.log(Registered_Course.findIndex(el => el.Course_id === cid))
            }

        }

        const fetchr = async () => {

            const response = await fetch('/api/coorp/' + id)

            const json = await response.json()

            if (response.ok) {

                setReg(json.Registered_Course)
                console.log("ffff")
                console.log(Registered_Course)
            }

        }

        const fetchadmin = async () => {

            const response = await fetch('/api/admin/')

            const json = await response.json()

            if (response.ok) {

                setadmin(json)
                
            }

        }

        fetchCourses();
        fetchr();
        fetchadmin();


    }, [])


    // console.log(courses.length)
    const handleSubmit = async (e) => {
        console.log(courses[0])
        const abc = [...Registered_Course, { Course_id: cid, Course_name: courses[0].Course_subject, Amount_paid: price, Watched: 0, Progress: 0, IsApproved:false }]
        console.log(abc)
        setshow(true)
        setReg(abc)
        console.log("REG " + Registered_Course)
        console.log(abc)
        const re = { Registered_Course }
        await fetch('/api/coorp/' + id, {
            method: 'PATCH',
            body: JSON.stringify({ Registered_Course: abc }),
            headers: {
                'Content-Type': 'application/json'
            },


        })

        const reqs = admin[0].Course_requests

        const Course_requests = [...reqs, { UserId: id, Course_id:cid }]
        

        await fetch('/api/admin/', {
            method: 'PATCH',
            body: JSON.stringify({ Course_requests }),
            headers: {
                'Content-Type': 'application/json'
            },


        })



    }
    function sasa() {
        console.log("hhhh")
        window.location.href = "indiv/mycourses/course/" + cid
    }



    return (
        <div>
            {courses.map((course) => (

                <main class="container">
                    <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                        <div class="row">
                            <div class="col-md-6 px-0">
                                <h1 class="display-4 fst-italic">{course.Course_title}</h1>
                                <p class="lead my-3">{course.Course_description}</p>
                                <span>Rating:{course.Course_overAllRate}</span>
                                <br />
                                <span>Created By:{course.Course_instructor}</span>
                            </div>
                            <div class="col-md-6 bg-light text-dark">
                                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div class="col p-4 d-flex flex-column position-static">
                                        <strong class="d-inline-block mb-2 text-primary">Course Preview</strong>
                                        <iframe width="600" height="300" src={"https://www.youtube.com/embed/" + course.Preview_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <br />
                                        {Registered_Course.findIndex(el => el.Course_id === cid) === -1 ?
                                         <button onClick={handleSubmit} type="button" class="btn btn-primary">Register</button> 
                                         :Registered_Course.filter(el => {return el.Course_id === cid})[0].IsApproved === false?
                                         <div class = "alert alert-success" role="alert">Your request has been sent</div>
                                         :Registered_Course.filter(el => {return el.Course_id === cid})[0].IsApproved === true? 
                                         <button onClick={() => window.location.href = `/coorp/mycourses/${id}`} type="button" class="btn btn-primary">View Course</button>:<p></p>}
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


                </main>
            ))}
        </div>

    );
}

export default NotRegCoorp