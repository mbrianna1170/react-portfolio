import React from "react";

function Nav() {
  const categories = [
    { name: "featured", description: "" },
    { name: "projects", description: "" },
  ];

  const handleClick = () => {
    console.log("click handled");
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/" onClick={() => handleClick()}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => handleClick()}>
              About Me
            </a>
          </li>
          <li>
            <span onClick={() => handleClick()}>Projects</span>
          </li>
        </ul>
        <button className="contact-btn">Let's Talk</button>
      </nav>
    </header>
  );
}

export default Nav;
