import {
  FaTruckMoving,
  FaUser,
  FaStoreAlt,
  FaCartPlus
} from "react-icons/fa";

export const HEAD = () => {
  return (
    <div className="head_container">
      <div className="head_wrapper">
      <div className="delivery">
        <div>
          <span>
            <FaStoreAlt />
          </span>
          <span>Click & Collect</span>
        </div>
        <div>
          <span>
            <FaTruckMoving />
          </span>
          <span>Home Delivery</span>
        </div>
      </div>
      <div className="delivery">
        <div>
          <span>
            <FaUser />
          </span>
          <span>Sign In</span>
        </div>
        <div>
          <span>
            <FaCartPlus />
          </span>
          <span>Cart</span>
        </div>
      </div>
    </div>
    <div className="image_wrapper">
        <img src="/images/logo.png" alt="evanna homeware logo" />
    </div>
    <nav className="category_container">
      <ul className="category_wrapper">
        <li>Home</li>
        <li>Products</li>
        <li>Interior Decor Services</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
    </div>
  );
};
