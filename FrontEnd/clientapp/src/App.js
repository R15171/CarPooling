import logo from './logo.svg';
import './App.css';
import Login from './Components/Signin-Signup/Login';
import Home from './Components/UserView/Home';
import { Route, Routes, Link } from 'react-router-dom';
import FindRide from './Components/UserView/FindRide';
import AdminHome from './Components/AdminView/AdminHome';
import PublishRide from './Components/DriverView/PublishRide';
import AddDriver from './Components/DriverView/AddDriver';
import Footer from './Components/Layout/Footer';
import RegistrationNew from './Components/Signin-Signup/RegistrationNew';
import UserRides from './Components/UserView/UserRides';
import TripHistory from './Components/UserView/TripHistory';
import UserProfile from './Components/Signin-Signup/Profile';
import Payment from './Components/UserView/Payment';
import ForgotPassword from './Components/Signin-Signup/Forget';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { login } from './ReduxStore/UserSlice';




function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      dispatch(login({ user: JSON.parse(user), token })); // Restore Redux state
    }
  }, [dispatch]);


  return (<div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegistrationNew />} />
      <Route path="/publishRide" element={<PublishRide />} />
      <Route path='/regDriver' element={<AddDriver />} />
      <Route path="/findRide" element={<FindRide />} />
      <Route path="/rides" element={<UserRides/>} />
      <Route path="/profile" element={<UserProfile/>} />
      <Route path="/admin/*" element={<AdminHome />} />
      <Route path="/history" element={<TripHistory/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/forget" element={<ForgotPassword/>} />
      <Route path='*' element={<Home />} />
    </Routes>
    <div>
<Footer/>
</div>
  </div>
  );
}

export default App;
