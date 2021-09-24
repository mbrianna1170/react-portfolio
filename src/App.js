import React from "react";
import "./test.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";

import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";

// import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Particles
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          links: {
            color: "#2c2b30",
            opacity: .75,
            width: 0.5,
          },
          shape: {
            type: "star",
            stroke: {
              width: 6,
              opacity: 8,
              color: "#fcd250"
            }
          }
        }
      }}>

      </Particles>
      <Nav></Nav>
      <Header></Header>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
