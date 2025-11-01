//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Services from './Components/Services';
import Team from "./Components/Team";
import Testimonials from './Components/Testimonials';
//import{Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Header/>
    <Home />
    <Services/>
    <Team/>
    <Testimonials/>
    
     <Footer/>


    </div>
  );
}

export default App;
