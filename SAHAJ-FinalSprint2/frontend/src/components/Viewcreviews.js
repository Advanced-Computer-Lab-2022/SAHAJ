import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"




const Viewcreviews = () => {
    const params = useParams()
    const cid = params.id
    const [Reviews, setReviews] = useState([])
    const [Course_subject, setcourse] = useState("")
    const [discount, setdiscount] = useState(0)
    const [beforedicount, setbeforediscount] = useState(0)
    var [minus, setminus] = useState(0)
    var [Course_price, setprice] = useState(0)
    const [show, setshow] = useState(false)
    const [duration, setduarion] = useState(0)

    useEffect(() => {



        const fetchcourses = async () => {

            const response = await fetch('/api/course')

            const json = await response.json()

            if (response.ok) {
                setcourse(json.filter(c => { return c._id === cid }).Course_subject)
                setReviews(json.filter(c => { return c._id === cid })[0].Reviews)
                setbeforediscount(json.filter(c => { return c._id === cid })[0].Course_price)
            }




        }



        fetchcourses();




    }, [])




    const courseDiscount = async () => {
        if (duration > 365 || discount > 100) {
            alert("Enter valid number ")
        }
        else {
            alert("succes")

            minus = beforedicount * (discount / 100)
            alert("before" + beforedicount)
            alert("minus" + minus)
            alert("new price" + beforedicount - minus)

            console.log(minus)
            Course_price = beforedicount - minus
            alert(Course_price)
            console.log(beforedicount)
            console.log(Course_price)
            const p = { Course_price }
            await fetch('/api/course/' + cid, {
                method: 'PATCH',
                body: JSON.stringify(p),
                headers: {
                    'Content-Type': 'application/json'
                },


            })
            setshow(false)
            window.location.reload()
        }
    }

    console.log(discount)
    console.log(beforedicount)

    function handleaddDisc() {
        if (duration > 365 || discount > 100) {
            alert("Enter valid number ")
        }
        else {
            alert("succes")
        }
    }

    return (

        <div>
            <nav class="navbar bg-body-tertiary  navbar-expand-lg bg-dark navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/instructor">E-Learning <i class="bi bi-book-half"></i></a>
                </div>
            </nav>
            <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: "300px", height: "650px" }}>
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#disc" class="nav-link active" aria-current="page">

                            Add Discount
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark">

                            Course Reviews
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark">

                            Orders
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark">

                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark">

                            Customers
                        </a>
                    </li>
                </ul>
            </div>



            <div class="modal fade" id="disc" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true" >

                <div class="modal-dialog modal-xl" >

                    <div class="modal-content">

                        <div class="modal-header">

                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Discount</h1>

                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                        </div>

                        <div class="modal-body">

                            <input placeholder="Enter Number of days for discount" type="number" min="0" max="365" value={duration} onChange={(e) => setduarion(e.target.value)}></input>
                            <input placeholder="Enter Percentage" type="number" min="0" max="100" value={discount} onChange={(e) => setdiscount(e.target.value)}></input>


                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" onClick={() => courseDiscount()} >Save</button>

                        </div>


                    </div>

                </div>

            </div>
            
            {Reviews&&Reviews.map((Reviewss) => (

                Reviews? <div class='course-details ReviewInst  '>
                    sdfgdfewd
                    <h4>{Reviewss.ReviewerName}</h4>
                    <p>Review: <strong>{Reviewss.ReviewerReview}</strong></p>
                </div>:<h1>No Review</h1>
            ))}

            {/* <a onClick={() => setshow(true)} class="btn btn-primary" key={cid}>Add Discount</a> */}

            {/* {show === true ? <input onChange={(e) => setdiscount(e.target.value)} value={discount} type="number" placeholder="discount" /> : <p></p>}

            {show === true ? <button onClick={() => courseDetails()} type="button" class="btn btn-danger">SAVE</button>
                : <p></p>}

            */}
        </div>
    );
}
export default Viewcreviews