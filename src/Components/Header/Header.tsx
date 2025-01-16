import { useEffect, useState } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [opeanMenu, sitOpeanMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();

  const isHomeTheme = location.pathname == "/";

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    addEventListener("resize", handleResize);

    return () => {
      removeEventListener("resize", handleResize);
    };
  });

  return (
    <header className={isHomeTheme ? "HomeTheme" : ""}>
      <div className={opeanMenu ? "container" : "container maxHight"}>
        <div id="logoMenu">
          <a href="#">
            <img src={isHomeTheme?"./logo.png":'./logo_dark_top.png'} />
          </a>
          <i
            className={`fa-solid ${opeanMenu ? "fa-xmark" : "fa-bars"}`}
            onClick={() => {
              sitOpeanMenu((pre) => !pre);
            }}
          ></i>
        </div>
        <menu>
          <ul
            className={!opeanMenu && screenWidth < 994 ? "" : "translateMenu"}
          >
            <li>
              <Link to="/">now showing</Link>
            </li>
            <li>
              <Link to="/cinemas">cinemas</Link>
            </li>
            <li>
              <Link to="/coming-soon">coming soon</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
            <li>
              <button className={isHomeTheme ? "HomeTheme" : ""}>
                <i className="fa-regular fa-user"></i> {"  "} log in
              </button>
            </li>
            <li>
              <button className={`arabic ${isHomeTheme ? "HomeTheme" : ""}`}>
                العربية
              </button>
            </li>
          </ul>
        </menu>
      </div>
    </header>
  );
};

export default Header;
