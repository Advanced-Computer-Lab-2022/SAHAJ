import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import AllCourses from '../components/AllCourses'
import { useLogout } from '../hooks/useLogout'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { useAuthContext } from '../hooks/useAuthContext';
const IndividualTrainee = () => {
    // console.log(props.id)
    const params = useParams()

    const navigate = useNavigate();
    const { user } = useAuthContext()
    var cid = ""
    if (user) {
        cid = user.id
        console.log(cid)
    }

    // const params = new URLSearchParams(window.location.search);
    // const courseId = params.get('courseId');
    const [indiv, setindiv] = useState(null);
    var [ filterrr , setfilterrr] = useState("")
    const [Reg, setReg] = useState([]);
    const [show, setshow] = useState(false)
    const [searchname, setsearch] = useState("")
    const profilehref = "/individual" + "/profile"
    const searchnameUrl = "/search/" + searchname
    const { logout } = useLogout()
    console.log(useAuthContext())

    // const {UserType} = user



    useEffect(() => {



        const fetchindiv = async () => {

            const response = await fetch('/api/indiv/' + cid)

            const json = await response.json()

            if (response.ok) {

                setindiv(json)
                console.log(json)
            }


            // setReg(coorp.Registered_Course)
            // console.log(coorp.Username)

        }



        fetchindiv();





    }, [])
    function gotoSearch() {
        console.log("ggf")
        console.log(searchname)
        navigate("/search/" + searchname)
    }
    const handlelogout = () => {

        logout()
        navigate("/log")
    }
    function sort(){
        
        
        setfilterrr("Popular Courses"  )        
        // window.location.reload() 
    }

    return (

        <div>
            {/* {indiv.map((indiv) => ( */}
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">E-Learning <i class="bi bi-book-half"></i></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle btn btn-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg></button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href={profilehref}>Edit Profile</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#" onClick={handlelogout} key={cid}>LOG OUT <i class="bi bi-box-arrow-left"></i></a></li>
                                </ul>
                            </li>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle btn btn-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filter <i class="bi bi-funnel-fill"></i>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a onClick={()=>sort()} class="dropdown-item" href="#">Popular Courses</a></li>
                                  
                                </ul>
                            </div>
                            <li class="nav-item">
                                <button class="btn btn-dark" onClick={() => window.location.href = `/indiv/mycourses#`} key={cid} >My Courses</button>
                            </li>

                        </ul>
                        <form class="d-flex" role="search">
                            <input onChange={(e) => setsearch(e.target.value)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button onClick={() => gotoSearch()} class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            < br />

            <AllCourses filterCourse = {filterrr}/>

        </div >

    )
}

export default IndividualTrainee
