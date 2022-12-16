import { useParams } from 'react-router-dom'
import NavbarCourse from './NavbarCourse'
import { useState, useEffect } from 'react'
const MyCoursesIndiv = () => {
    const params = useParams()
    const cid = params.id
    const [inst, setInst] = useState([]);
    const [coorp, setcoorp] = useState([]);
    const [courses, setcourse] = useState([]);
    const [RegCourses, setReg] = useState([])

    useEffect(() => {



        const fetchcoorp = async () => {

            const response = await fetch('/api/indiv/')

            const json = await response.json()

            if (response.ok) {

                setcoorp(json.filter(c => { return c._id === cid }))
            }




        }



        fetchcoorp();





    }, [])
    // if (coorp[0] !== null) {
    //     setReg(coorp[0].Registered_Course)
    // }   
    // useEffect(() => {



    //     const fetchcourse = async () => {

    //         const response = await fetch('/api/course/')

    //         const json = await response.json()

    //         if (response.ok) {

    //             setcourse(json.filter(c => {
    //                 // for(let i = 0;i<coorp[0].Registered_Course.length;i++){
    //                 //     return c._id === coorp[0].Registered_Course[i]
    //                 // }
    //                 // return c._id === coorp+[0].Registered_Course[1]

    //             }))

    //         }




    //     }



    //     fetchcourse();





    // }, [])


    return (



        // <div class='row'>
        //     {coorp.map((corp) => (
        //         corp.Registered_Course.map((x) => (
        //             <div class='col-8'>
        //                 <div className='card'>
        //                     <img src="https://img.freepik.com/premium-vector/e-learning-innovative-online-education-internet-technology-concept-wireframe-hand-touching-digital-interface_127544-1189.jpg?w=2000" class="card-img-top" alt="..." />
        //                     <div className='card-body'>
        //                         <h5 class="card-title">{x.Course_name}</h5>
        //                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                         <a onClick={() => window.location.href = `${cid}/course/${x.Course_id}`} class="btn btn-primary" key={x.Course_id}>To Course</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))
        //     ))}
        // </div>


        <div class='row'>
            {coorp.map((corp) => (
                corp.Registered_Course.map((x) => (
                    <div class='col-3'>
                        <div class='card'>
                            <img src="https://img.freepik.com/premium-vector/e-learning-innovative-online-education-internet-technology-concept-wireframe-hand-touching-digital-interface_127544-1189.jpg?w=2000" class="card-img-top" alt="..." />
                            <div class='card-body'>
                                <h5 class="card-title">{x.Course_name}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a onClick={() => window.location.href = `${cid}/course/${x.Course_id}`} class="btn btn-primary" key={x.Course_id} >To Course</a>
                            </div>
                        </div>
                    </div>
                ))
            ))}
        </div>
    )
}
export default MyCoursesIndiv