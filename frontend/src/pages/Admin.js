import { useEffect , useState} from "react"
import AddAdminForm from "../components/AddAdminForm"
import Home from "./Home"
import AddInstructorForm from "../components/AdminAddins"
import AddCorpTraineeForm from "../components/AddCorpTraineeForm"

const Admin = ()=>{
return(
    <div className="Instructor"> 
        {/* <AddAdminForm/>
        <AddInstructorForm/>
        <AddCorpTraineeForm/> */}

    <button onClick={event =>  window.location.href='/addAdmin'} >Add an admin</button>
    <button onClick={event =>  window.location.href='/AddInstructor'} >Add an instructor</button>
    <button onClick={event =>  window.location.href='/AddCoorp'} >Add a Coorpate Trainee</button>

    </div>
    
)
}
export default Admin
