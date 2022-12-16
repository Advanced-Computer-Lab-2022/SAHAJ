import axios from 'axios'
import Sidebar from './Sidebar';
import { useParams } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { useState, useEffect } from 'react'
import { Rating } from 'react-simple-star-rating'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import Course_Det from './CourseDetIndiv';

const SubContent2 = () => {

    var jsonSub;
    const params = useParams()
    const cid = params.cid
    const s = params.sid
    const id = params.id
    const [sid, setSid] = useState('')
    // const params = new URLSearchParams(window.location.search);
    // const courseId = params.get('courseId');
    const [courses, setCourse] = useState([]);
    const [Reviews, setReviews] = useState([])
    const [IReviews, setReviews2] = useState([])
    const [indiv,setindiv]  = useState([])
    const [subtitle, setSub] = useState([]);
    const [show, setshow] = useState(false);
    const [show2, setshow2] = useState(false);
    const [subtitle2, setSub2] = useState([]);
    const [Fname, setFname] = useState("")
    const [instid, setinstid] = useState("")
    const [instructor, setinstructor] = useState(null)

    const [Reviewerreview, setReviewerRev] = useState("")
    const [Reviewerreview2, setReviewerRev2] = useState("")
    var [indivoldrate, setindivoldrate] = useState(0)
    const [progress,setprogress] = useState(20)
    var [indivoldrate2, setindivoldrate2] = useState(0)


    const [rated, setrated] = useState(false)
    var [index, setindex] = useState(0)


    const examref = "/coorp/solveExam/" + cid + '/' + s
    useEffect(() => {

        const fetchindiv = async () => {

            const response = await fetch('/api/indiv')
            console.log(response.json)
            const json = await response.json()

            if (response.ok) {
                setindiv(json.filter(c => { return c._id === id })[0])
                setFname(json.filter(c => { return c._id === id })[0].Fname)
                // setprogress(json.filter(c => { return c._id === cid })[0].Registered_Course.filter(e => {return e.Course_id === cid}))
                // console.log(json.filter(c => { return c._id === cid })[0].Registered_Course.filter(e => {return e.Course_id === cid}))
            }

        }

        const fetchCourses = async () => {

            const response = await fetch('/api/course')
            console.log(response.json)
            const json = await response.json()

       
            

            if (response.ok) {

                console.log("edkjaksdk")
                setCourse(json.filter(c => { return c._id === cid }))
                setReviews(json.filter(c => { return c._id === cid })[0].Reviews)
               
                const response2 = await fetch('/api/instructor/' + json.filter(c => { return c._id === cid })[0].Course_instructor_id)
                const json2 = await response2.json()
                console.log(response2)
                
                setinstructor(json2)
                setReviews2(json2.IReviews)
          

            }

        }






        const fetchSubtitles = async () => {

            const response = await fetch('/api/subtitle')
            console.log('ffffffff')
            jsonSub = await response.json()
            console.log(response)
            if (response.ok) {

                setSub(jsonSub.filter(c => { return c._id === s }))

            }
            if (!response.ok) {

                console.log('ffffffff')

            }




        }


        const fetchSubtitles2 = async () => {

            const response = await fetch('/api/subtitle')
            console.log('ffffffff')
            jsonSub = await response.json()
            console.log(response)
            if (response.ok) {

                setSub2(jsonSub.filter(c => { return c.CourseId === cid }))

            }
            if (!response.ok) {

                console.log('ffffffff')

            }




        }
        //         if(courses.length !== 0){
        //         const fetchinst = async () => {
        //             // const ftchid = cou2[0].Course_instructor_id
        //             console.log(courses)


        //         const response = await fetch('/api/instructor/' )
        //         jsonSub = await response.json()
        //         console.log(response)
        //         if (response.ok) {

        //             setinstructor(jsonSub)

        //         }
        //         if (!response.ok) {


        //         }

        // }

        // fetchinst();  
        //         }
        fetchSubtitles2();
        fetchCourses();
        fetchSubtitles();
        fetchindiv();



    }, [])


    const handleRating = (rate) => { //course

        setshow(true)

        if (courses) {

            console.log(courses)

           

            const idx = courses[0].Course_rating.findIndex(el => el.RaterId === id && el.RaterType === "individual")

            if (idx === -1) {

                const oldrating = courses[0].Course_overAllRate

                const Num = courses[0].Course_NumberOfRatings

                const thh = ((Num * oldrating) + rate) / (Num + 1)



                handleSubmitC1(thh, Num + 1, rate)



            }

            else {

                indivoldrate = courses[0].Course_rating[idx].Rate

                setrated(true)

                console.log(rated)

                index = idx

                const oldrating = courses[0].Course_overAllRate

                console.log("old: " + oldrating)

                const Numb = courses[0].Course_NumberOfRatings

                const ooo = courses[0].Course_rating[idx].Rate

                const thh = ((Numb * oldrating) - ooo) + (rate)

                console.log(courses[0].Course_rating[idx].Rate)

                const vv = thh / Numb

                console.log(vv)



                handleSubmitC2(vv, Numb, rate)



            }


        }
    }

    const handleSubmitC1 = async (rr, nn, newRate) => {

        const addition = [...courses[0].Course_rating, { Rate: newRate, RaterType: "individual", RaterId: id }]

        console.log(rr)

        await fetch('/api/course/' + cid, {

            method: 'PATCH',

            url: '/api/course',

            body: JSON.stringify({ Course_rating: addition, Course_overAllRate: rr, Course_NumberOfRatings: nn }),

            headers: {

                'Content-Type': 'application/json'

            },

        })

        alert('your rating was successfuly saved')

    }

    const handleSubmitC2 = async (rr, nn, newRate) => {

        courses[0].Course_rating[index].Rate = newRate

        console.log("index " + index)

        const addition2 = courses[0].Course_rating

        console.log(rr)

        await fetch('/api/course/' + cid, {

            method: 'PATCH',

            url: '/api/course',

            body: JSON.stringify({ Course_rating: addition2, Course_overAllRate: rr, Course_NumberOfRatings: nn }),

            headers: {

                'Content-Type': 'application/json'

            },

        })

        alert('your rating was successfuly updated from ' + indivoldrate + ' to ' + newRate)

    }



    const handleRating2 = (rate) => { // instructor
        setshow2(true)
        console.log(instructor)
        if (instructor) {

            console.log(instructor)

            const idx = instructor.rating.findIndex(el => el.RaterId === id && el.RaterType === "individual")

            console.log(idx)


            if(idx === -1){

                const oldrating = instructor.overAllRate

                const Num = instructor.numberofratings

                const thh = ((Num*oldrating)+rate) / (Num+1)

                console.log(thh)

                handleSubmitI1(thh , Num+1 , rate)

           

            }

            else{

                indivoldrate2 = instructor.rating[idx].Rate

                setrated(true)

                console.log(rated)

                index = idx

                const oldrating = instructor.overAllRate

                console.log("old: "+oldrating)

                const Numb = instructor.numberofratings

                const thh = ((Numb*oldrating)-instructor.rating[idx].Rate)+(rate)

                console.log(instructor.rating[idx].Rate)

                const vv = thh / Numb

                console.log(vv)

 

                handleSubmitI2(vv , Numb , rate)

 

            }


        }

    }


    
    const handleSubmitI1 = async (rr , nn , newRate) => {

        const addition = [...instructor.rating, {Rate: newRate , RaterType: "individual" , RaterId : id}]

        console.log(rr)

        await fetch('/api/instructor/'+instid, {

            method: 'PATCH',

            url: '/api/instructor',

            body: JSON.stringify({rating: addition , overAllRate: rr , numberofratings: nn}),

            headers: {

                'Content-Type': 'application/json'

            },

        })

        alert('your rating was successfuly saved')

    }

    const handleSubmitI2 = async (rr , nn , newRate) => {

        instructor.rating[index].Rate = newRate

         console.log("index "+index)

        const addition2 = instructor.rating

        console.log(rr)

        await fetch('/api/instructor/'+instid, {

            method: 'PATCH',

            url: '/api/instructor',

            body: JSON.stringify({rating: addition2 , overAllRate: rr , numberofratings: nn}),

            headers: {

                'Content-Type': 'application/json'

            },

        })

        alert('your rating was successfuly updated from ' + indivoldrate2 + ' to ' + newRate)

    }

    const handleSave = async () => {
        const Reviewss = [...Reviews, { ReviewerID: id, ReviewerName: Fname, ReviewerReview: Reviewerreview }]
        console.log(JSON.stringify(Reviewss))
        setReviews(Reviewss)
        await fetch('/api/course/' + cid, {

            method: 'PATCH',
            body: JSON.stringify({ Reviews: Reviewss }),
            headers: {
                'Content-Type': 'application/json'
            },

        })
    }
    const handleSave2 = async () => {
        const Reviewss = [...IReviews, { ReviewerID: id, ReviewerName: Fname, ReviewerReview: Reviewerreview2 }]
        console.log(JSON.stringify(Reviewss))
        setReviews2(Reviewss)
        await fetch('/api/instructor/' + instid, {

            method: 'PATCH',
            body: JSON.stringify({ IReviews: Reviewss }),
            headers: {
                'Content-Type': 'application/json'
            },

        })
    }


    function gett(c) {

        ct = c
        console.log(ct)
        return c
    }

    function handleRefund(){
       console.log(indiv.Registered_Course[0].Course_id)
       var i =0;
       while(i<indiv.Registered_Course.length){
        if(indiv.Registered_Course[i].Course_id === cid){
            if(indiv.Registered_Course[i].Progress<50){
                alert("Refund Request Is Pending")
            }
            else{
                alert("You Cant Refund Since You Have Completed "+indiv.Registered_Course[i].Progress+"%")
                break
            }
        }
        else{
            i++
        }
       }

    }


    return (

        <div
            style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
        >
            {courses.map((course) => (

                <CDBSidebar textColor="#fff" backgroundColor="#333">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <a
                            href="/"
                            className="text-decoration-none"
                            style={{ color: 'inherit' }}
                        >
                            {course.Course_subject}
                        </a>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            {subtitle2.map((sub) => (

                                <a onClick={() => window.location.href = `/${id}/${course._id}/${sub._id}/coorp`}><CDBSidebarMenuItem icon="table">{sub.Name}</CDBSidebarMenuItem></a>

                            ))}

                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal3"type="button" class="btn btn-danger">Refund Course</button>
                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            style={{
                                padding: '20px 5px',
                            }}
                        >
                            Copyrights E-Learning ©
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>

            ))}
            {subtitle.map((sub) => (

                <div>
                    <iframe width="1250" height="500" src={"https://www.youtube.com/embed/" + sub.Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">E-learning</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">

                                    <li class="nav-item">
                                        <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Rate Course⭐</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">Rate Instructor⭐</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href={examref}>Take Exam</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Reviews</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Rate Course</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="sasadiv">
                                        <Rating
                                            onClick={handleRating}
                                        /* Available Props */
                                        />
                                    </div>
                                    <br /> <br />
                                    <div class="input-group">
                                        {/* <span class="input-group-text">With textarea</span> */}
                                        {show === true ? <textarea onChange={(e) => setReviewerRev(e.target.value)} placeholder="Tell us about your own exprience taking this course. Was it a good match for you?" class="form-control" aria-label="With textarea"></textarea> : <p></p>}
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={() => handleSave()} type="button" class="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Rate Instructor</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="sasadiv">
                                        <Rating
                                            onClick={handleRating2}
                                        /* Available Props */
                                        />
                                    </div>
                                    <br /> <br />
                                    <div class="input-group">
                                        {/* <span class="input-group-text">With textarea</span> */}
                                        {show2 === true ? <textarea onChange={(e) => setReviewerRev2(e.target.value)} placeholder="Tell us about your own exprience with this instructor" class="form-control" aria-label="With textarea"></textarea> : <p></p>}
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={() => handleSave2()} type="button" class="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Rate Instructor</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="sasadiv">
                                      <h4>Are You Sure You Want To Refund This Course?</h4> 
                                    </div>
                                    <br /> <br />
                                   
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                    <button onClick={() => handleRefund()} type="button" class="btn btn-primary">Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))
            }

        </div>

    )
}

export let ct = ""

export default SubContent2;
