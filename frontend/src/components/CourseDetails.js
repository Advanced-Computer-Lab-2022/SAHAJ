import { useState} from "react"

const CourseDetails = ({course}) => {
const [show,setshow] = useState(false)
    function courseDetails(){
        setshow(true)
    }
    
 
//  <button onClick={event =>  window.location.href='/filterSubjectRate'} >Filter All courses by subject or rate</button>


        return (
            <div className='row'>
                <div className='col-3'>
                    <div className='card'>
                        <img src="https://img.freepik.com/premium-vector/e-learning-innovative-online-education-internet-technology-concept-wireframe-hand-touching-digital-interface_127544-1189.jpg?w=2000" class="card-img-top" alt="..." />
                        <div className='card-body'>
                            <>
                            <h5 class="card-title">{course.Course_title}</h5>
                            <h6>Course Rating: {course.Course_rating}</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </>
                            
                          
                        </div>
                    </div>
                </div>

            
        </div>

        )
    
  
}

export default CourseDetails