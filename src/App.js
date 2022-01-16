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

function App() {

  return (
    <div className="App">
      <Home></Home>
      <Food></Food>
      <Collage></Collage>
      <About></About>
    </div>
  );
}

export default App;
