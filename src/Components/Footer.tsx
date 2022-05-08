import { NavLink } from 'react-router-dom';

export const FOOTER = () => {
  return (
    <footer className="footer_wrapper">
      <section>
        <div className="quick_links">
          <span> Quick Links </span>
          <span>
            <NavLink
              to="/contact"
              className={({isActive}) => isActive ? "footer_nav_active" : "footer_nav"}
              end
            >
              Contact Us
            </NavLink>
          </span>
          <span>
            <NavLink
              to="/terms_of_service"
              className={({isActive}) => isActive ? "footer_nav_active" : "footer_nav"}
              end
            >
              Terms of service
            </NavLink>
          </span>
          <span>
            <NavLink
              to="/refund_policy"
              className={({isActive}) => isActive ? "footer_nav_active" : "footer_nav"}
              end
            >
              Refund Policy
            </NavLink>
          </span>
        </div>
        <div>
          <span>
            Weekly Interior Content
          </span>
          <p>
            Look out for our styling posts on our social media platforms i.e facebook, instagram and tiktok.
          </p>
        </div>
        <div>
          DELIVERIES TAKE 3 WORKING DAYS for Zimbabwe deliveries. COLLECTIONS SHOULD BE COMMUNICATED AT LEAST TWO DAYS PRIOR.
        </div>
      </section>
      <section>
        <div>
          <div></div>
          <div></div>
        </div>
        <span>
          
        </span>
      </section>
    </footer>
  );
};
