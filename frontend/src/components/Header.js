import NavLinks from "./NavLinks";
import menu from "../assets/shared/tablet/icon-hamburger.svg";
import logo from "../assets/shared/desktop/logo.svg";
import shoppingCart from "../assets/shared/desktop/icon-cart.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <button className="btn-menu">
          <span className="visually-hidden">Mobile Menu</span>
          <img src={menu} alt="" />
        </button>
        <img src={logo} alt="Audiophile logo" className="logo" />
        <button className="btn-shopping-cart">
          <span className="visually-hidden">Shopping Cart</span>
          <img src={shoppingCart} alt="" />
        </button>
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
