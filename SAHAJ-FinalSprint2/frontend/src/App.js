import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages and components
import Home from './pages/Home'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavbarGuest from './components/NavbarGuest'
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
function App() {
  return (

    <div className="App"  >

      <BrowserRouter>
        {/* <NavbarCourse /> */}
        {/* <Sidebar /> */}
        <Routes>
          <Route
            path="/"
            element={<SignIn />}

          />

          <Route
            path="/coorprate/:id/course/:idC"
            element={<NotRegCoorp />}

          />
          <Route
            path="/search/:name"
            element={<Search />}

          />

          <Route
            path="/individual/:id/course/:idC"
            element={<NotRegIndiv />}

          />

          <Route
            path="/instructor/:id/course/:idC"
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
            path="/coorp/mycourses/:id"
            element={<MyCourses />}

          />
          <Route
            path="/indiv/mycourses/:id"
            element={<MyCoursesIndiv />}

          />
          <Route
            path="coorp/mycourses/:idcoorp/course/:id"
            element={<CourseDetCoorp />}

          />
          <Route
            path="indiv/mycourses/:idindiv/course/:id"
            element={<CourseDetIndiv />}

          />
          <Route
            path="/instructor/:id/createcourse/:idC/:idS"
            element={<Upload />}

          />
          <Route
            path="/:id/:cid/:sid/coorp"
            element={<SubContent />}

          />
          <Route
            path="/instructor/:id/viewcreviews"
            element={<Viewcreviews />}

          />
          <Route
            path="/:id/:cid/:sid/indiv"
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
            path="/instructor/:id/createcourse"
            element={<AddCoursesForm />}

          />
          <Route
            path="/instructor/:id/createcourse/:idC"
            element={<CreateSubtitle />}

          />

          {/* <Route
            path="/instructor/:id"
            element={<Instructor />}

          /> */}

          <Route
            path="/instructor/:id"
            element={<Instructor />}

          />
          <Route
            path="/log"
            element={<Login2 />}

          />

          <Route
            path="/coorprate/:id/profile"
            element={<EditProfileC />}

          />

          <Route
            path="/individual/:id/profile"
            element={<EditProfileIndiv />}

          />

          <Route
            path="/instructor/:id/profile"
            element={<EditProfileInst />}

          />

          <Route
            path="/coorprate/:id"
            element={<CoorprateTrainee />}

          />
          <Route
            path="/individual/:id"
            element={<IndividualTrainee />}

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
            path="/instructor/:idinst/createcourse/createexam/:idcourse/:idsub"
            element={<CreateExam />}

          />
          <Route
            path="/instructor/:id/pricefilter"
            element={<PriceFilter />}

          />

          <Route
            path="/indiv/:idi/:idc/solveExam"
            element={<SolveExam />}

          />

          <Route
            path="/coorp/:idi/:idc/solveExam"
            element={<SolveExamCoorp />}

          />

          <Route
            path="/coorp/solveExam/:idcourse/:ide"
            element={<SolveTheExamChoosenCoorp />}

          />

          <Route
            path="/individual/solveExam/:idcourse/:ide"
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
