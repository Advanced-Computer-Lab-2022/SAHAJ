import { useEffect , useState} from "react"
//components
import instructorDetails from '../components/CourseDetails'
import Country from "../components/Country"
import FilterSubjectRate from "../components/FilterSubjectRate"
//import AddCourseForm from '../components/AddCourseForm'
const Home = () =>{

    const [Inst, setInst] = useState(null)
    useEffect(() => {

        const fetchInstructor = async () => {

            const response = await fetch('/api/instructor')



            const json = await response.json()



            if (response.ok) {

                setInst(json)




            }







        }

        fetchInstructor();

    }, [])


    return(
        <div className="home"> 
            <button onClick={() => window.location.href = `instructor/6355ae5e2e61c954f7251a07`}>Instructor</button>
            <button onClick={() => window.location.href = `coorprate/635aded365c79ebb9cc7274d`}>CoorprateTrainee</button>
            <button onClick={() => window.location.href = `individual/637d395e177d794eba38a053`}>IndividualTrainee</button>
        </div>
        
        
    )
}

export default Home