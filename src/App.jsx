import { Routes, Route } from 'react-router-dom';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Signup from './pages/Form/Signup';
import Login from './pages/Form/Login';
import Home from './pages/Home';
import Count from './pages/Count';
import Weather from '../src/components/Weather';
import { useEffect } from "react";


const App = () => {
  useEffect(() => {
    if ("ServiceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("sw registered: ", registration);
          })
          .catch((registrationError) => {
            console.log("sw registration failed: ", registrationError);
          });
      });
    }
  }, []);


    const notify = () => toast("Wow so easy!");



  return (
    <>
      <Weather/>
          <Routes>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/count' element={<Count/>}/>
              <Route path='/home' element={<Home/>}/>
          </Routes>



          <ToastContainer />
          <button onClick={notify}>Notify!</button>

    </>
  );
}

export default App;
