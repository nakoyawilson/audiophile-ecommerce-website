import { Link } from "react-router-dom";
import "./ShopLinks.css";

const ShopLinks = () => {
  return (
    <ul className="shop-links container">
      <li className="shop-link-wrapper">
        <Link to="/" className="shop-link">
          <h2 className="heading">Headphones</h2>
          <span className="btn-shop">Shop</span>
        </Link>
      </li>
      <li className="shop-link-wrapper">
        <Link to="/" className="shop-link">
          <h2 className="heading">Speakers</h2>
          <span className="btn-shop">Shop</span>
        </Link>
      </li>
      <li className="shop-link-wrapper">
        <Link to="/" className="shop-link">
          <h2 className="heading">Earphones</h2>
          <span className="btn-shop">Shop</span>
        </Link>
      </li>
    </ul>
  );
};

export default ShopLinks;
