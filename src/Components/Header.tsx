import './Header.scss'

const Header = () => {
  return (
    <header>
        <div>
      <a href="#">
        <img src="./logo.png" />
      </a>
      <ul>
        <li>
          <a href="">new showing</a>
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
          <button><i className="fa-regular fa-user"></i> log in</button>
        </li>
        <li>
          <button>العربية</button>
        </li>
      </ul>
        </div>
    </header>
  );
};

export default Header;
