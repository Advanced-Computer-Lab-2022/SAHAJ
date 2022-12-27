import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom'
//pages and components
import Home from './pages/Home'
import { useAuthContext } from './hooks/useAuthContext'
import InstructorCourses from './components/InstructorCourses'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavbarGuest from './components/NavbarGuest'
import Popper from 'popper.js'
import AddCourseForm from './components/AddCourseForm';
import AddAdminForm from './components/AddAdminForm';
import FilterInstructor from './components/FilterInstructor';
import AddCorpTraineeForm from './components/AddCorpTraineeForm';
import AddInstructorForm from './components/AdminAddins';
import Instructor from './pages/Instructor';
import Admin2 from './pages/Admin';
import CoorprateTrainee from './pages/CoorpateTrainee';
import IndividualTrainee from './pages/IndividualTrainee';
import Guest from './pages/guest';
import AllCourses from './components/AllCourses';
import CTitle from './components/instructorViewTitle';
import FilterSubjectRate from './components/FilterSubjectRate';
import CourseDetIndiv from './components/CourseDetIndiv';
import CourseDetCoorp from './components/CourseDetCoorp';
import NavbarCourse from './components/NavbarCourse';
import NavbarInstructor from './components/NavbarInstructor';
import AddCoursesForm from './components/AddCoursesForm';
import Subtitle from './components/Subtitle';
import UpdatePass from './components/UpdatePass';
import Sidebar from './components/Sidebar';
import Upload from './components/Upload';
import SubContent from './components/SubContent';
import MyCourses from './components/MyCourses';
import NotReg from './components/NotRegIndiv';
import SignIn from './components/SignUpInst';
import Duration from './components/Duration';
import CreateExam from './components/CreateExam';
import SolveExam from './components/solveExam';
import SolveTheExamChoosen from './components/SolveTheExamChoosen';
import SolveExamCoorp from './components/SolveExamCoorp';
import SolveTheExamChoosenCoorp from './components/SolveTheExamChoosenCoorp';
import PriceFilter from './components/PriceFilter';
import CreateSubtitle from './components/CreateSubtitle';
import NotRegIndiv from './components/NotRegIndiv';
import NotRegCoorp from './components/NotRegCoorp';
import InstuctorViewCourse from './components/instructorviewcourse'
import MyCoursesIndiv from './components/MyCoursesIndiv';
import EditProfileC from './components/EditProfileC';
import EditProfileIndiv from './components/EditProfileIndiv';
import EditProfileInst from './components/EditProfileInst';
import Search from './components/Search';
import Footer from './components/Footer';
import SubContent2 from './components/SubContent2';
import Viewcreviews from './components/Viewcreviews';
import { Resource, Admin, Login } from 'react-admin'
import Admin3 from './pages/Admin2';
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList';
import Login2 from './components/login';
import { useState } from 'react'
function App() {
   var f = true
  const {user} = useAuthContext()
  var userId= ""
  if(user){
    userId = user.id
    console.log(user.UserType === "indiv")
  }
  console.log(useAuthContext().user)

  const redirectAfterLogin = () => {
    console.log(user.UserType)
    if (user.UserType == "instructor")
      return "/instructor"
    else if (user.UserType == "admin")
      return "/adminViewProblems"
    else if (user.UserType == "indiv")
      return "/individual"
    else if (user.UserType == "coorp")
      return "/coorprate"
    else
      return "/home"
  }

  return (

    <div className="App"  >

      <BrowserRouter>
        {/* <NavbarCourse /> */}
        {/* <Sidebar /> */}
        <Routes>
          <Route
            path="/"
            element={<Home />}

          />

          <Route
            path="/coorprate/course/:idC"
            element={<NotRegCoorp />}

          />

          <Route
            path="/search/:name"
            element={<Search />}

          />

          <Route
            path="/individual/course/:idC"
            element={<NotRegIndiv />}

          />

          <Route
            path="/instructor/course/:idC"
            element={<InstuctorViewCourse />}

          />


          <Route
            path="/duration"
            element={<Duration />}

          />

          {/* <Route
            path="/admin"
            element={<NavbarCourse />}

          /> */}
          <Route
            path="/admin"
            element={<Admin2 />}

          />
          <Route
            path="/coorp/mycourses"
            element={<MyCourses />}

          />
          <Route
            path="/indiv/mycourses"
            element={<MyCoursesIndiv />}

          />
          <Route
            path="coorp/mycourses/course/:id"
            element={<CourseDetCoorp />}

          />
          <Route
            path="indiv/mycourses/course/:id"
            element={<CourseDetIndiv />}

          />
          <Route
            path="/instructor/createcourse/:idC/:idS"
            element={<Upload />}

          />
          <Route
            path="/:cid/:sid/coorp"
            element={<SubContent />}

          />
          <Route
            path="/instructor/:id/viewcreviews"
            element={<Viewcreviews />}

          />
          <Route
            path="/instructor/mycourses"
            element={<InstructorCourses />}

          />
          <Route
            path="/:cid/:sid/indiv"
            element={<SubContent2 />}

          />
          <Route
            path="/ss"
            element={<Subtitle />}

          />
          <Route
            path="/instructor/updatepass/:id"
            element={<UpdatePass />}

          />
          <Route
            path="/instructor/createcourse"
            element={<AddCoursesForm />}

          />
          <Route
            path="/instructor/createcourse/:idC"
            element={<CreateSubtitle />}

          />

          {/* <Route
            path="/instructor/:id"
            element={<Instructor />}

          /> */}

          <Route
            path="/instructor"
            element={<Instructor />}

          />
          <Route
            path="/log"
            element={!user ? <Login2 /> : <Navigate to={redirectAfterLogin()} />}


          />

          <Route
            path="/coorprate/profile"
            element={<EditProfileC />}

          />

          <Route
            path="/individual/profile"
            element={<EditProfileIndiv id = {userId} />}

          />

          <Route
            path="/instructor/profile"
            element={<EditProfileInst />}

          />

          <Route
            path="/coorprate"
            element={<CoorprateTrainee />}

          />
          <Route
            path="/individual"
            element={<IndividualTrainee /> }

          />
          <Route
            path="/guest"
            element={<Guest />}
          />
          {/* <Route
            path="/course"
            element={<Course_Det />}
          /> */}
          <Route
            path="/AddCourse"
            element={<AddCourseForm />}

          />
          <Route
            path="/Allcourses"
            element={<AllCourses />}

          />

          <Route
            path="/ctitle"
            element={<CTitle />}
          />

          <Route
            path="/filterSubjectRate"
            element={<FilterSubjectRate />}
          />
          <Route
            path="/addAdmin"
            element={<AddAdminForm />}
          />
          <Route
            path="/AddInstructor"
            element={<AddInstructorForm />}
          />
          <Route
            path="/AddCoorp"
            element={<AddCorpTraineeForm />}
          />

          {/* <Route
            path=":/:id2/course/:id"
            element={< Course_Det />}
          /> */}

          <Route
            path="/instructor/createcourse/createexam/:idcourse/:idsub"
            element={<CreateExam />}

          />
          <Route
            path="/instructor/:id/pricefilter"
            element={<PriceFilter />}

          />

          {/* <Route
            path="/indiv/solveExam/cid/sid"
            element={<SolveExam />}

          />

          <Route
            path="/coorp/:idi/:idc/solveExam"
            element={<SolveExamCoorp />}

          /> */}

          <Route
            path="/coorp/solveExam/:idcourse/:ide"
            element={<SolveTheExamChoosenCoorp />}

          />

          <Route
            path="/indiv/solveExam/:idcourse/:ide"
            element={<SolveTheExamChoosenCoorp />}

          />
          <Route

            path='/aadmin'
            element={<Admin3 />}

          />




        </Routes>
      </BrowserRouter>

    </div>


  );
}

export default App;
