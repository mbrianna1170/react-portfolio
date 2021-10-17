// dependencies
import React from "react";
import Particles from "react-particles-js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// styling
import "./test.css";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from './components/Resume';
import Footer from "./components/Footer";

function App() {
  return (
	<Router>
    <div className="app-container">
      <Particles
      className="particles-board"
      params={{
        "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 5,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0.75,
	                "opacity": 1
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
      }}>

      </Particles>
      <Nav/>
      <Header/>
	  <Switch>
        <Route exact path="/" component={About}/>
		<Route exact path ="/portfolio" component={Portfolio}/>
		<Route exact path ='/resume' component={Resume}/>
		</Switch>
		<Footer/>
    </div>
	</Router>  
  );
}

export default App;
