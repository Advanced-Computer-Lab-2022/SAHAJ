import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"



const Viewcreviews = () => {
    const params = useParams()
    const cid = params.id
    const [Reviews,setReviews] = useState([])
    const [Course_subject,setcourse] = useState("")
    const [discount, setdiscount] = useState(0)
    const [beforedicount, setbeforediscount] = useState(0)
    var [minus, setminus] = useState(0)
    var [Course_price, setprice] = useState(0)
    const [show, setshow] = useState(false)

    useEffect(() => {



        const fetchcourses = async () => {

            const response = await fetch('/api/course')

            const json = await response.json()

            if (response.ok) {
                setcourse(json.filter(c => { return c._id === cid}).Course_subject)
                setReviews(json.filter(c => { return c._id === cid})[0].Reviews)
                setbeforediscount(json.filter(c => { return c._id === cid})[0].Course_price)
            }




        }



        fetchcourses();

        


    }, [])
    const courseDetails = async () => {
        minus = beforedicount * (discount / 100)
        alert("before"+beforedicount)
        alert("minus"+minus)
        alert("new price"+beforedicount - minus)
        
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

    }

console.log(discount)
console.log(beforedicount)

    return(
        <div>
             <a onClick={() => setshow(true)} class="btn btn-primary" key={cid}>Add Discount</a>
                        <br /> <br />
                        {show === true ? <input onChange={(e) => setdiscount(e.target.value)} value={discount} type="number" placeholder="discount" /> : <p></p>}
                        <br />
                        {show === true ? <button onClick={() => courseDetails()} type="button" class="btn btn-danger">SAVE</button>
                            : <p></p>}

            {Reviews.map((Reviews) => (

            <div class = 'course-details'>
                <h4>{Reviews.ReviewerName}</h4>
                <p>Review: <strong>{Reviews.ReviewerReview}</strong></p>
            </div>
              ))}
        </div>
    );
}
export default Viewcreviews