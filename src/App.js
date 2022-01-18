import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Food from './components/Food/Food';
import Collage from './components/Collage/Collage';
import About from './components/About/About';
import Services from './components/Services/Services';
import Partner from './components/Partner/Partner';
import Download from './components/Download/Download';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Home></Home>
      <Food></Food>
      <Collage></Collage>
      <About></About>
      <Services></Services>
      <Partner></Partner>
      <Download></Download>
      <Footer></Footer>
    </div>
  );
}

export default App;
