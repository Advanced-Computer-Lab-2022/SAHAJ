import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import AllCourses from '../components/AllCourses'
import { useLogout } from '../hooks/useLogout'

const IndividualTrainee = () => {
    const params = useParams()
    const cid = params.id
    const navigate = useNavigate();

    console.log(cid)
    // const params = new URLSearchParams(window.location.search);
    // const courseId = params.get('courseId');
    const [indiv, setindiv] = useState([]);
    const [Reg, setReg] = useState([]);
    const [show, setshow] = useState(false)
    const [searchname,setsearch] = useState("")
    const profilehref = "/individual/"+cid+"/profile" 
    const searchnameUrl = "/search/"+searchname
    const { logout } = useLogout()

    useEffect(() => {



        const fetchindiv = async () => {

            const response = await fetch('/api/indiv/')

            const json = await response.json()

            if (response.ok) {

                setindiv(json.filter(c => { return c._id === cid }))
            }


            // setReg(coorp.Registered_Course)
            // console.log(coorp.Username)

        }

        

        fetchindiv();
        




    }, [])
    function gotoSearch(){
        console.log("ggf")
        console.log(searchname)
      navigate("/search/"+searchname)
    }
    const handlelogout = () => {
        logout()
      }
    
    return (
        <div>
            {/* <Country/>
        {courses && courses.map((course) =>(
                    <CourseDetailsCoorp key={course._id} course = {course} />   
         ))} */}
            {indiv.map((indiv) => (
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">E-learning</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href={profilehref}>Welcome {indiv.Username}</a>
                                </li>
                                <li class="nav-item">
                                    <button  class="btn btn-dark"onClick={() => window.location.href = `/indiv/mycourses/${indiv._id}#`}key={indiv._id} >My Courses</button>
                                </li>

                                <li class="nav-item">
                                    <button  class="btn btn-dark"onClick={handlelogout}key={indiv._id} >Logout</button>
                                </li>
                                
                            </ul>
                        </div>
                        <div class="container-fluid">
                            <form class="d-flex" role="search">
                                <input onChange={(e)=>setsearch(e.target.value)}class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button onClick={()=>gotoSearch()} class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            ))}
            <br />
            <AllCourses/>
           
        </div>

    )
}

export default IndividualTrainee
