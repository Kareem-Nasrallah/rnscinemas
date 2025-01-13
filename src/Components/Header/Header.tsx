import { useState } from "react";
import "./header.scss";

const Header = () => {
  const [menuAppear, sitmenuAppear] = useState(false);
  const appearIt = () => {
    
    if (screen.width < 961) {
      if (menuAppear) {
        return "0 0";
      } else {
        return "-250% -140%";
      }
    } else {
      return "0 0";
    }
  };

  return (
    <header>
      <div className={menuAppear? '':'maxHight'}>
        <a href="#">
          <img src="./logo.png" />
        </a>
        <i
          className={menuAppear ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          onClick={() => {
            sitmenuAppear(!menuAppear);
          }}
        ></i>
        <ul style={{ translate: `${appearIt()}` }}>
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
