// importing styling ٩(＾◡＾)۶
import "../../styles/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

// function for Contact (◕‿◕)
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_YOUR_SERVICE_ID}`,
        `${import.meta.env.VITE_YOUR_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_YOUR_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="everything-container">
        <div className="text-container">
          <p className="lead contact-me">
            Whether you have a project in mind, want to discuss a potential
            collaboration, or simply want to chat about all things web
            development, I&apos;d love to hear from you! Feel free to contact me
            using either the submit form or any social media linked below.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="form-container">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Jane Doe"
              required
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="user_email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              required
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Hey, I would love to hire you!"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className=" submit btn btn-outline-dark"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

// exporting function (´◡`)
export default Contact;
