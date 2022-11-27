import { BrowserRouter, Routes, Route} from 'react-router-dom'
//pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AddCourseForm from './components/AddCourseForm';
import AddAdminForm from './components/AddAdminForm';
import FilterInstructor from './components/FilterInstructor';
import AddCorpTraineeForm from './components/AddCorpTraineeForm';
import AddInstructorForm from './components/AdminAddins';
import Instructor from './pages/Instructor';
import Admin from './pages/Admin';
import CoorprateTrainee from './pages/CoorpateTrainee';
import IndividualTrainee from './pages/IndividualTrainee';
import Guest from './pages/guest';
import CTitle from './components/instructorViewTitle';
import FilterSubjectRate from './components/FilterSubjectRate';
import NavbarInstructor from './components/NavbarInstructor';
import CreateExam from './components/CreateExam';
import SolveExam from './components/solveExam';
import SolveTheExamChoosen from './components/SolveTheExamChoosen';
import SolveExamCoorp from './components/SolveExamCoorp';
import SolveTheExamChoosenCoorp from './components/SolveTheExamChoosenCoorp';
import PriceFilter from './components/PriceFilter';
function App() {
  
  return (
    <div className="App" >
     <BrowserRouter>

      {/* <NavbarInstructor/>  */}
      <div className="pages" >
        <Routes>
          <Route 
          path="/"
          element={<Home />}
          
        />

        <Route
          path="/admin"
          element = {<Admin/>}
        
        />
        <Route
          path="/instructor/:id"
          element={<Instructor />}
        
        />
         <Route
          path="/coorprate"
          element={<CoorprateTrainee />}
        
        />
        <Route
          path="/indivdual"
          element={<IndividualTrainee />}
        
        />
        <Route
        path = "/guest"
        element = {<Guest/>}
        />

      <Route
      path="/AddCourse"
      element = {<AddCourseForm/>}
      
      />

      <Route
      path = "/ctitle"
      element = {<CTitle/>}
      />

        <Route
      path = "/filterSubjectRate"
      element = {<FilterSubjectRate/>}
      />
  <Route
      path = "/addAdmin"
      element = {<AddAdminForm/>}
      />
  <Route
      path = "/AddInstructor"
      element = {<AddInstructorForm/>}
      />
  <Route
      path = "/AddCoorp"
      element = {<AddCorpTraineeForm/>}
      />

    <Route
    path = "/instructor/:id/createExam"
    element = {<CreateExam/>}
    
    />
    <Route
    path = "/instructor/:id/pricefilter"
    element = {<PriceFilter/>}
    
    />

<Route
    path = "/indiv/:idi/:idc/solveExam"
    element = {<SolveExam/>}
    
    />

<Route
    path = "/coorp/:idi/:idc/solveExam"
    element = {<SolveExamCoorp/>}
    
    />

<Route
    path = "/coorp/:idi/:idc/solveExam/:ide"
    element = {<SolveTheExamChoosenCoorp/>}
    
    />

<Route
    path = "/indiv/:idi/:idc/solveExam/:ide"
    element = {<SolveTheExamChoosen/>}
    
    />

        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
