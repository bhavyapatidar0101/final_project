import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Join from './pages/Join';
import Logout from './pages/Logout';
import TrainerHome from './pages/TrainerHome';
import TrainerMyStudents from './pages/TrainerMyStudents';
import TrainerMyCourses from './pages/TrainerMyCourses';
import TrainerMyEquipments from './pages/TrainerMyEquipments';
import MemberHome from './pages/MemberHome';
import MemberCourses from './pages/MemberCourses';
import MemberEquipments from './pages/MemberEquipments';
import MemberTrainers from './pages/MemberTrainers';
import MemberPurchase from './pages/MemberPurchase';
import AdminHome from './pages/AdminHome';
import AdminUsers from './pages/AdminUsers';
import AdminCourses from './pages/AdminCourses';
import AdminEquipments from './pages/AdminEquipments';
import AdminPayments from './pages/AdminPayments';
function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/admin-payments' element={<AdminPayments/>}/>
        <Route exact path='/admin-equipments' element={<AdminEquipments/>}/>
        <Route exact path='/admin-courses' element={<AdminCourses/>}/>
        <Route exact path='/admin-users' element={<AdminUsers/>}/>
        <Route exact path='/admin-home' element={<AdminHome/>}/>
        <Route exact path='/member-purchase/:course_id' element={<MemberPurchase/>}/>
        <Route exact path='/member-trainers' element={<MemberTrainers/>}/>
        <Route exact path='/member-equipments' element={<MemberEquipments/>}/>
        <Route exact path='/member-courses' element={<MemberCourses/>}/>
        <Route exact path='/member-home' element={<MemberHome/>}/>
        <Route exact path='/trainer-my-equipments' element={<TrainerMyEquipments/>}/>
        <Route exact path='/trainer-my-courses' element={<TrainerMyCourses/>}/>
        <Route exact path='/trainer-my-students' element={<TrainerMyStudents/>}/>
        <Route exact path='/trainer-home' element={<TrainerHome/>}/>
        <Route exact path='/logout' element={<Logout/>}/>
        <Route exact path='/join' element={<Join/>}/>
        <Route exact path='/services' element={<Services/>}/>
        <Route exact path='/contact' element={<Contact />}/>
        <Route exact path='/login' element={<Login />} />
        <Route exact path="/" element={<Home />}/>
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
