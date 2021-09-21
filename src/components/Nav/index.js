import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

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
      <h2>
        <a href="/">Home</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              Who Am I
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>Contact</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span
                onClick={() => {
                  handleClick();
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
