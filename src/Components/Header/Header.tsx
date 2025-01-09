import "./header.scss";

const Header = () => {
  return (
    <header>
      <div>
        <a href="#">
          <img src="./logo.png" />
        </a>
        <ul>
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
