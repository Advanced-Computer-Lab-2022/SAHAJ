import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AllCourses from '../components/AllCourses'
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext'

const CoorprateTrainee = () => {
    const params = useParams()
    const cid = params.id
    const { user } = useAuthContext()
    console.log(user)
    // const params = new URLSearchParams(window.location.search);
    // const courseId = params.get('courseId');
    const [coorp, setcoorp] = useState([]);
    const [Reg, setReg] = useState([]);
    const [show, setshow] = useState(false)
    const profilehref = "/coorprate/"+cid+"/profile"   //coorprate/:id/profile
    const [searchname,setsearch] = useState("")
    const navigate = useNavigate();
    useEffect(() => {



        const fetchcoorp = async () => {

            const response = await fetch('/api/coorp/')

            const json = await response.json()

            if (response.ok) {

                setcoorp(json.filter(c => { return c._id === cid }))
            }


            setReg(coorp.Registered_Course)
            console.log(coorp.Username)

        }

        

        fetchcoorp();
        




    }, [])
    function gotosearch(){
        navigate("/search/"+searchname)

    }
    return (
        <nav>
            {/* <Country/>
        {courses && courses.map((course) =>(
                    <CourseDetailsCoorp key={course._id} course = {course} />   
         ))} */}
            {coorp.map((coorp) => (
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">E-learning</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href={profilehref}>Welcome {coorp.Username}</a>
                                </li>
                                <li class="nav-item">
                                    <button  class="btn btn-dark"onClick={() => window.location.href = `/coorp/mycourses/${coorp._id}#`}key={coorp._id} >My Courses</button>
                                </li>
                             
                            </ul>
                        </div>
                        <div class="container-fluid">
                            <form class="d-flex" role="search">
                                <input onChange={(e)=>setsearch(e.target.value)}class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button onClick={()=>gotosearch()}class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            ))}
            <br />
            
            <br/>
            <AllCourses/>
           
        </nav>

    )
}

export default CoorprateTrainee
