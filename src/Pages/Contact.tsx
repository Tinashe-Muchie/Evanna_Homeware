import { useState } from "react";
import { FaQuestion } from "react-icons/fa";

export const CONTACT_US = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    phone_number: "",
    message: ""
  });

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Angela Nyahuruwa"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "evannahomeware@yahoo.com"
    },
    {
      id: 3,
      name: "phone_number",
      type: "tel",
      placeholder: "+263 77 534 5876"
    }
  ];

  return (
    <section className="contact_us_container">
      <h1>Contact Us</h1>
      <form action="" className="form_wrapper">
        <header className="form_header_wrapper">
          <div>
            <span>Ask A Question</span>
            <span>Please contact us for specific questions</span>
          </div>
          <div>
            <FaQuestion />
          </div>
        </header>
        <main>
          {inputs.map((input) => (
            <input
              key={input.id}
              type={input.type}
              placeholder={input.placeholder}
              value={values[input.name as keyof typeof values]}
            />
          ))}
          <label>
            Message
            <textarea />
          </label>
          <input type="submit" value="Send" />
        </main>
      </form>
      <p>
      Collections and appointments at our Malbereign (Harare) showroom can be scheduled via the following channels:
      </p>
      <span>
      </span>
      <span>
        Contact Number: +263 78 614 1715
      </span>
    </section>
  );
};
