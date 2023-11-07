import { Routes, Route } from 'react-router-dom';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Signup from './pages/Form/Signup';
import Login from './pages/Form/Login';


function App() {
    const notify = () => toast("Wow so easy!");




  return (
      <>
          <Routes>
              {/* <Route path='/' element={<NavBar/>}/> */}
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
          </Routes>



          <ToastContainer />
          <button onClick={notify}>Notify!</button>

    </>
  );
}

export default App;
