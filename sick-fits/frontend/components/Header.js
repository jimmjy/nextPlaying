import Nav from "./Nav";

const Header = () => (
  <div>
    <div className="bar">
      <a href="#">Sick Fits</a>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>search</p>
    </div>
    <div>cart</div>
  </div>
);

export default Header;
