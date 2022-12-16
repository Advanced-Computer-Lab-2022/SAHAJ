import { useEffect, useState } from "react"
import AddCourseForm from "../components/AddCourseForm"
import Home from "./Home"
import CTitle from "../components/instructorViewTitle"
import FilterSubjectRate from "../components/FilterSubjectRate"
import NavbarInstructor from "../components/NavbarInstructor"
import { BrowserRouter } from "react-router-dom"
import { useParams, useSearchParams } from 'react-router-dom';
import axios from "axios"
import CourseDetails from "../components/CourseDetails"
import { subjectexported } from "../components/NavbarInstructor"
import { Form, Button, Modal } from "react-bootstrap";
import AllCourses from "../components/AllCourses"

const Instructor = () => {

    const params = useParams();
    const insid = params.id
    console.log(insid)
    const [show, setshow] = useState(false)
    const [CourseFlag, setCourseFlag] = useState(false)
    const [courses2, setCourses2] = useState(null)
    const [courses, setCourses] = useState(null)
    const createExamLocation = "/instructor/" + insid + "/createExam"
    const pricefilterloc = "/instructor/" + insid + "/pricefilter"
    const createCourseloc = "/instructor/" + insid + "/createcourse"
    const [subject, setsubject] = useState('')
    const [showModal , setshowModal] = useState(false)
    const [instructor , setinstructor] = useState(null)
    const profilehref = "/instructor/"+insid+"/profile" 

    useEffect(() => {

        const fetchCourses = async () => {
            const response = await fetch('/api/course')
            const json = await response.json()
            if (response.ok) {

                setCourses(json)
                setCourses2(json)

            }
        }

        const fetchtheinstructor = async () => {
            const response = await fetch('/api/instructor/'+insid)
            const json = await response.json()
            if (response.ok) {

                setinstructor(json)

            }
        }

        fetchtheinstructor();
        fetchCourses();


    }, [])
    //const filtered = employees.filter(employee => {
    //  return employee.country === 'Canada';
    console.log(subject)

    console.log(instructor)


    function setmodal(){
        setshowModal(true)
    }


    function logoutfunc(){
        
    }

    function clicked() {
        setshow(true)
        if (courses !== null) {
            setCourses2(courses.filter(course => { return course.Course_instructor_id === insid }))
            console.log(courses2)
        }
        console.log("clicked")

    }
    function clicked2() {
        setCourses2(courses.filter(course => { return course.Course_subject.toLowerCase() === subject.toLowerCase() }))
    }
    function Flag(){
        setCourseFlag(true)
        setCourses2(courses.filter(course => { return course.Course_instructor_id === insid }))

    }
    return (

        <div className="Instructor">
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">E-learning</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Welcome 
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>

                            {/* <li class="nav-item">
                                {instructor?<a class="nav-link active" aria-current="page" href={profilehref}>Welcome: {instructor.Fname}</a>:<div></div>}
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link" onClick={setmodal} >Create new course</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href={pricefilterloc}>filter by price</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" onClick={Flag}>View my courses</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" onClick={logoutfunc}>logout</a>
                            </li>
                        </ul>
                    </div>
                    <div class="container-fluid">
                        <div class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search for a Subject" aria-label="Search" onChange={e => setsubject(e.target.value)} />
                            <button class="btn btn-outline-success" type="submit" onClick={clicked2}>Search</button>
                        </div>
                    </div>
                </div>
            </nav>

          <br />

            

            {/* <button onClick={clicked}>Click to view</button> */}

            <>
            <Modal show={showModal}>
                <Modal.Header>
                    <Modal.Title>Contract</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    By Accepting this form you are willing to commit to these following conditions: 
                    <div>1- All videos and meterials copyrights are transfered to SAHAJ learning and must not be shared with any one</div>
                    <div>2- 30% of the net profits made by instructor: {insid} belong to SAHAJ learning </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={event =>  window.location.href='/instructor/' + insid + '/createcourse' }>
                        Accept
                    </Button>
                    <Button variant="dark" onClick={event =>  window.location.href='/instructor/' + insid}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>

            </>

            {CourseFlag === false?<AllCourses/>:
             courses2 && courses2.map((course) => (
                <CourseDetails key={course._id} course={course} />
            ))}


            {/* <button onClick={event =>  window.location.href='/'} >View All Courses</button>
            <button onClick={event =>  window.location.href='/AddCourse'} >Add A course</button>
            <button onClick={event =>  window.location.href='/ctitle'} >View your courses</button>
            <button onClick={event =>  window.location.href='/filterSubjectRate'} >Filter All courses by subject or rate</button>
 */}

        </div>

    )
}
export default Instructor
