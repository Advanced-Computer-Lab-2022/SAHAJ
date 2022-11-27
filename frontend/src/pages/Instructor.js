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
const Instructor = () => {

    const params = useParams();
    const insid = params.id
    console.log(insid)
    const [show, setshow] = useState(false)
    const [courses2, setCourses2] = useState(null)
    const [courses, setCourses] = useState(null)
    const createExamLocation = "/instructor/" + insid + "/createExam"
    const pricefilterloc = "/instructor/" + insid + "/pricefilter"
    const [subject, setsubject] = useState('')

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
    //const filtered = employees.filter(employee => {
    //  return employee.country === 'Canada';
    console.log(subject)
    function clicked() {
        setshow(true)
        if (courses !== null) {
            setCourses2(courses.filter(course => { return course.Course_instructor === insid }))
            console.log(courses2)
        }
        console.log("clicked")

    }
    function clicked2() {
        setCourses2(courses.filter(course => { return course.Course_subject === subject }))
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
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href={createExamLocation} >Create Exam</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href={pricefilterloc}>filter by price</a>
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

            <h1> Welcome Instructor: {insid}</h1>
            <h4>Your Courses:</h4>
            <button onClick={clicked}>Click to view</button>


            {show && courses2 && courses2.map((course) => (
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
