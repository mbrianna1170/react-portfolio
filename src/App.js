import React from "react";
import "./test.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";

import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

// import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
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
      <main>
        <About/>
		<Portfolio/>
      </main>
    </div>
  );
}

export default App;
