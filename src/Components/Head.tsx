import { GrDeliver, GrCart, GrUser, GrContactInfo } from 'react-icons/gr';
import { IoStorefrontOutline } from 'react-icons/io5';

export const HEAD = () => {
  return(
    <div className="head_wrapper">
      <ul>
        <li>
          <form action="">
            <input
              type="text"
              name="search"
              placeholder=""
            />
          </form>
        </li>
        <li>
          <span>
            <IoStorefrontOutline />
          </span>
          <span>
            Click & Collect
          </span>
        </li>
        <li>
          <span>
            <GrDeliver />
          </span>
          <span>
            Home Delivery
          </span>
        </li>
      </ul>
      <div className="image_wrapper">
        <img 
          src="/images/logo.jpg" 
          alt="evanna homeware logo" 
        />
      </div>
      <ul>
        <li>
          <span>
            <GrContactInfo />
          </span>
          <span>
            Contact Us
          </span>
        </li>
        <li>
          <span>
            <GrUser />
          </span>
          <span>
            Sign Up/Sign In
          </span>
        </li>
        <li>
          <span>
            <GrCart />
          </span>
          <span>
            Cart
          </span>
        </li>
      </ul>
    </div>
  );
}