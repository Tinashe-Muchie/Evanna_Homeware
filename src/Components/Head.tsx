import {
  FaTruckMoving,
  FaUser,
  FaStoreAlt,
  FaRegCommentDots,
  FaCartPlus
} from "react-icons/fa";

export const HEAD = () => {
  return (
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
      <div className="image_wrapper">
        <img src="/images/logo.jpg" alt="evanna homeware logo" />
      </div>
      <div className="delivery">
        <div>
          <span>
            <FaRegCommentDots />
          </span>
          <span>Contact Us</span>
        </div>
        <div>
          <span>
            <FaUser />
          </span>
          <span>Sign Up/Sign In</span>
        </div>
        <div>
          <span>
            <FaCartPlus />
          </span>
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
};
