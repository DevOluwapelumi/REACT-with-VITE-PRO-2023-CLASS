import './App.css'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';


function App() {
  let name = "Oluwapelumi"
  return (
    <>
      <NavBar />
      <h1>Hello {name}</h1>
      <h2>{2 * 16}</h2>
      <Footer />
      <Home/>
    </>
  );
}

export default App;
