import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Country from './Country';
import { useParams } from 'react-router-dom';

const EditProfileIndiv = () => {
    const params = useParams()
    const cid = params.id
    const [show, setshow] = useState(false)
    const [indiv, setindiv] = useState([]);
    const [Username, setUsername] = useState("")
    const [Fname, setFname] = useState("")
    const [Lname, setLname] = useState("")
    const [Bio, setBio] = useState("")
    const profilehref = "/individual/"+cid+"/profile"
    useEffect(() => {



        const fetchindiv = async () => {

            const response = await fetch('/api/indiv/')

            const json = await response.json()

            if (response.ok) {

                setindiv(json.filter(c => { return c._id === cid }))
               
            }
            // console.log(coorp[0].Fname)



        }



        fetchindiv();





    }, [])

    const handleClick2 = async (e) => {
        console.log("click2")
        setshow(false)
        if (Username === "") {
            setUsername(indiv[0].Username)
        }
        if (Fname === "") {
            setFname(indiv[0].Fname)
        }
        if (Lname === "") {
            setLname(indiv[0].Lname)
        }
        if (Bio === "") {
            setBio(indiv[0].Bio)
        }
        const indiv = { Username, Fname, Lname, Bio }
        await fetch('/api/indiv/' + cid, {
            method: 'PATCH',
            body: JSON.stringify(indiv),
            headers: {
                'Content-Type': 'application/json'
            },


        })




    }
    function handleClick() {
        console.log("click1")
        setshow(true)

    }

    console.log(show)

    return (
        <div>
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
                                <button class="btn btn-dark" onClick={() => window.location.href = `/indiv/mycourses/${indiv._id}#`} key={indiv._id} >My Courses</button>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <div class="container-fluid">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            ))}
            <div class="bg-light">
                {indiv.map((indiv) => (
                    <div class="container">
                        <div class="row-d flex justify-content-center">
                            <div class="col-md-10 mt-5 pt-5">
                                <div class="row z-depth-3">
                                    <div class="col-sm-4 bg-info rounded-left">
                                        <div class="card-block text-center text-white">
                                            <i class="fas fa-user-tie fa-7x mt-5"></i>
                                            <h2 class="font-weight-bold mt">{indiv.Fname}</h2>
                                            <p>Indivdual Trainee</p>
                                            <i class="far fa-edit fa-2x mb-4"></i>

                                        </div>

                                    </div>
                                    <div class="col-sm-8 bg-white rounded-right">
                                        <h3 class=" text-center">Profile Information</h3>
                                        <Button onClick={() => handleClick()} variant="outlined" endIcon={<EditIcon />}>
                                            Edit
                                        </Button>
                                        <hr class="bagdge-primary mt-0 w-25" />
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <p class="font-weight-bold">First name:</p>
                                                {show === false ? <h6 class="text-muted">{indiv.Fname}</h6> : <input placeholder={indiv.Fname} onChange={(e) => setFname(e.target.value)} />}
                                            </div>

                                            <div class="col-sm-6">
                                                <p class="font-weight-bold">Email:</p>
                                                {show === false ? <h6 class="text-muted">{indiv.Username}</h6> : <input placeholder={indiv.Username} onChange={(e) => setUsername(e.target.value)} />}
                                            </div>

                                            <div class="col-sm-6">
                                                <br />
                                                <p class="font-weight-bold">Last name :</p>
                                                {show === false ? <h6 class="text-muted">{indiv.Lname}</h6> : <input placeholder={indiv.Lname} onChange={(e) => setLname(e.target.value)} />}
                                            </div>

                                            <div class="col-sm-6">
                                                <br />
                                                <Country />
                                            </div>
                                            <div class="col-sm-6">
                                                <br />
                                                <p class="font-weight-bold">Biograhy</p>
                                                {show === false ? <h6 class="text-muted">{indiv.Bio}</h6> : <input placeholder={indiv.Bio} onChange={(e) => setBio(e.target.value)} />}
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

                                        </div>
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

export default EditProfileIndiv