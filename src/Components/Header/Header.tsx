import { useState } from "react";
import "./header.scss";

const Header = () => {
  const [opeanMenu, sitOpeanMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const appearIt = () => {
  //   console.log(opeanMenu);
  //   if (screenWidth < 994) {
  //     if (opeanMenu) {
  //       return "0 0";
  //     } else {
  //       return "-250% -140%";
  //     }
  //   } else {
  //     return "0 0";
  //   }
  // };
  onresize = () => {
    setScreenWidth(window.innerWidth);
    console.log(screenWidth);
    // appearIt();
  };

  return (
    <header>
      <div className={opeanMenu ? "sectionWidth" : "sectionWidth maxHight"}>
        <a href="#">
          <img src="./logo.png" />
        </a>
        <i
          className={opeanMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          onClick={() => {
            console.log(opeanMenu)
            console.log(screenWidth)
            sitOpeanMenu(pre => !pre);
          }}
        ></i>
        <ul className={ !opeanMenu && screenWidth < 994? 'translateMenu' : ''}>
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
      </div>
    </header>
  );
};

export default Header;
