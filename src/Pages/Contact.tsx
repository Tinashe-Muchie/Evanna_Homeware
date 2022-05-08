import { FaQuestion } from 'react-icons/fa';

export const CONTACT_US = () => {
  return (
    <section className="contact_us_container">
      <h1>Contact Us</h1>
      <form action="" className="form_wrapper">
        <header className="form_header_wrapper">
          <div>
            <span>
              Ask A Question
            </span>
            <span>
              Please contact us for specific questions
            </span>
          </div>
          <div>
            <FaQuestion />
          </div>
        </header>
      </form>
    </section>
  );
};
