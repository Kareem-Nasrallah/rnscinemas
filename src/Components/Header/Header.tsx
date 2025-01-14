import { useState } from "react";
import "./header.scss";

const Header = () => {
  const [opeanMenu, sitOpeanMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  onresize = () => {
    setScreenWidth(window.innerWidth);
    console.log(screenWidth);
  };

  return (
    <header>
      <div className={opeanMenu ? "container" : "container maxHight"}>
        <div id="logoMenu">
          <a href="#">
            <img src="./logo.png" />
          </a>
          <i
            className={opeanMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            onClick={() => {
              console.log(opeanMenu);
              console.log(screenWidth);
              sitOpeanMenu((pre) => !pre);
            }}
          ></i>
        </div>
        <menu>
          <ul
            className={!opeanMenu && screenWidth < 994 ? "" : "translateMenu"}
          >
            <li>
              <a href="">now showing</a>
            </li>
            <li>
              <a href="">cinemas</a>
            </li>
            <li>
              <a href="">coming soon</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
            <li>
              <button>
                <i className="fa-regular fa-user"></i> {"  "} log in
              </button>
            </li>
            <li>
              <button className="arabic">العربية</button>
            </li>
          </ul>
        </menu>
      </div>
    </header>
  );
};

export default Header;
