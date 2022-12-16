import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Country from './Country';
import { useParams } from 'react-router-dom';

const EditProfileInst = () => {
    const params = useParams()
    const cid = params.id
    const [show, setshow] = useState(false)
    const [showmessage, setshowmessage] = useState(false)
    const [inst, setinst] = useState([]);
    const [Username, setUsername] = useState("")
    //var [course, setcourse] = useState([])
    const [Fname, setFname] = useState("")
    const [Lname, setLname] = useState("")
    const [Bio, setBio] = useState("")
    var [review, setreview] = useState([])
    const [showReview,setshowreview] = useState(false)
    const profilehref = "/individual/" + cid + "/profile"
    useEffect(() => {



        const fetchinst = async () => {

            const response = await fetch('/api/instructor/')

            const json = await response.json()

            if (response.ok) {

                setinst(json.filter(c => { return c._id === cid }))
                console.log(json.filter(c => { return c._id === cid })[0])
                // console.log(json.filter(c => { return c._id === cid })[0].IReviews)
                setreview(json.filter(c => { return c._id === cid })[0].IReviews)
                console.log(review)
            }
            // console.log(coorp[0].Fname)



        }

        fetchinst();





    }, [])

    const handleClick2 = async (e) => {
        console.log("click2")
        setshow(false)
        if (Username === "") {
            setUsername(inst[0].Username)
        }
        if (Fname === "") {
            setFname(inst[0].Fname)
        }
        if (Lname === "") {
            setLname(inst[0].Lname)
        }
        if (Bio === "") {
            setBio(inst[0].Bio)
        }
        const inst = { Username, Fname, Lname, Bio }
        await fetch('/api/instructor/' + cid, {
            method: 'PATCH',
            body: JSON.stringify(inst),
            headers: {
                'Content-Type': 'application/json'
            },


        })




    }
    function handleClick() {
        console.log("click1")
        setshow(true)

    }
    function setshowreviewf(){
        setshowreview(true)
    }
    const SendEmail = async (email) => {
        setshowmessage(true)
        const e = { email }
        console.log(e)
        await fetch('/api/sendemail/' + cid, {
            method: 'POST',
            body: JSON.stringify(e),
            headers: {
                'Content-Type': 'application/json'
            },


        })
    }

    console.log(show)
    console.log(review)
    return (
        <div>
            {inst.map((inst) => (

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">E-learning</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href={profilehref}>Welcome: {inst.Fname}</a>:<div></div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" onClick={"setmodal"} >Create new course</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href={"pricefilterloc"}>filter by price</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" onClick={"Flag"}>View my courses</a>
                                </li>
                            </ul>
                        </div>
                        <div class="container-fluid">
                            <div class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search for a Subject" aria-label="Search" onChange={""} />
                                <button class="btn btn-outline-success" type="submit" onClick={"clicked2"}>Search</button>
                            </div>
                        </div>
                    </div>
                </nav>
    
            ))}
            <div class="bg-light">
                {inst.map((inst) => (

                    <div class="container">
                        <div class="row-d flex justify-content-center">
                            <div class="col-md-10 mt-5 pt-5">
                                <div class="row z-depth-3">
                                    <div class="col-sm-4 bg-info rounded-left">
                                        <div class="card-block text-center text-white">
                                            <i class="fas fa-user-tie fa-7x mt-5"></i>
                                            <h2 class="font-weight-bold mt">{inst.Fname}</h2>
                                            <p>Instructor</p>
                                            <i class="far fa-edit fa-2x mb-4"></i>

                                        </div>

                                    </div>
                                    <div class="col-sm-8 bg-white rounded-right">
                                        <h3 class=" text-center">Profile Information</h3>
                                        <h6 class=" text-center">Your Rating: {inst.overAllRate}⭐</h6>
                                        <Button onClick={() => handleClick()} variant="outlined" endIcon={<EditIcon />}>
                                            Edit
                                        </Button>
                                        <hr class="bagdge-primary mt-0 w-25" />
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <p class="font-weight-bold">First name:</p>
                                                {show === false ? <h6 class="text-muted">{inst.Fname}</h6> : <input placeholder={inst.Fname} onChange={(e) => setFname(e.target.value)} />}
                                            </div>

                                            <div class="col-sm-6">
                                                <p class="font-weight-bold">Email:</p>
                                                {show === false ? <h6 class="text-muted">{inst.Username}</h6> : <input placeholder={inst.Username} onChange={(e) => setUsername(e.target.value)} />}
                                            </div>

                                            <div class="col-sm-6">
                                                <br />
                                                <p class="font-weight-bold">Last name :</p>
                                                {show === false ? <h6 class="text-muted">{inst.Lname}</h6> : <input placeholder={inst.Lname} onChange={(e) => setLname(e.target.value)} />}
                                            </div>

                                            <div class="col-sm-6">
                                                <br />
                                                <Country />
                                            </div>
                                            <div class="col-sm-6">
                                                <br />
                                                <p class="font-weight-bold">Biograhy</p>
                                                {show === false ? <h6 class="text-muted">{inst.Bio}</h6> : <input placeholder={inst.Bio} onChange={(e) => setBio(e.target.value)} />}
                                            </div>
                                            <div class="col-sm-6">
                                                <br />
                                                {showmessage === true ? <h6>Email has been sent to {inst.Username}</h6> : <p></p>}
                                                <button onClick={() => SendEmail(inst.Username)} type="button" class="btn btn-primary">Change Password</button>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <br />


                                                    {show === true ? <button onClick={handleClick2} type="button" class="btn btn-danger">Update</button> : <p></p>}

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <h4 class="mt-3"></h4>
                                    <hr class="bg-primary" />
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <button onClick={()=>setshowreviewf()}type="button" class="btn btn-primary">View my reviews</button>
                                            {review.map((inst) => (
                                                
                                             showReview === true?   <div class='course-details'>
                                                    <h4>{inst.ReviewerName}</h4>
                                                    <p><strong>{inst.ReviewerReview}</strong></p>
                                                </div>:<p></p>
                                            ))} 
                                        </div>
                                        {/* {inst.map((sub) => (

                                            <div class='course-details'>
                                                {sub}
                                                {/* <h4>{inst.IReviews}</h4> */}
                                        {/* <p>{course.IReviews.ReviewerReview}</p> */}



                                        {/* <div class="col-sm-6">
                                       efrwfe
                                    </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>


        </div>

    );
}

export default EditProfileInst