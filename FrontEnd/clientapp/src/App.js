import logo from './logo.svg';
import './App.css';
import Login from './Components/Signin-Signup/Login';
import Home from './Components/UserView/Home';
import RegistrationForm from './Components/Signin-Signup/RegistrationForm';
import { Route, Routes } from 'react-router-dom';
import FindRide from './Components/UserView/FindRide';
import AdminHome from './Components/AdminView/AdminHome';
import VerifyDriver from './Components/AdminView/VerifyDriver';
import RegistrationNew from './Components/Signin-Signup/RegistrationNew';


function App() {
  return (<div>

    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>      
    </div> */}

    

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegistrationNew />} />
      <Route path="/publishRide" element={''} />
      <Route path="/findRide" element={<FindRide/>} />
      <Route path="/rides" element={''} />
      <Route path="/profile" element={''} />
      <Route path="/admin/*" element={<AdminHome />}/>
      <Route path='*'  element={<Home />}/>
    </Routes>
    <div>
      <h1 style={{textAlign:'center',padding:'100px'}}>
        this is about section
      </h1>
    </div>

  </div>
  );
}

export default App;
