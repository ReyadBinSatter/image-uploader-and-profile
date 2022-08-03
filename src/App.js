import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import Registration from './Components/SignIn & Registration/Registration';
import SignIn from './Components/SignIn & Registration/SignIn';
import Gallery from './Components/Gallery/Gallery';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='bg'>
      <div className='bg-color'>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Profile></Profile>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          <Route path="/registration" element={<Registration></Registration>}></Route>
          <Route path='/gallery' element={<Gallery></Gallery>}></Route>
          {/* <Route path="*" element={<Notfound></Notfound>}></Route> */}
        </Routes>

      </div>

    </div>
  );
}

export default App;
