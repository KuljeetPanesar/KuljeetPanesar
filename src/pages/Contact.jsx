import emailjs from "emailjs-com";
import apiKeys from "../apikeys.js";
import "../styles/Contact.css";

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0v6t4ym",
        apiKeys.TEMPLATE_ID,
        e.target,
        apiKeys.USER_ID
      )
      .then(
        (result) => {
          alert("Message Sent! I'll get back to you soon :)", result.text);
        },
        (error) => {
          alert("Sorry, an error occured :( Please try again.", error.text);
        }
      );
  };

  const span = document.querySelector("span");

  span.onclick = function () {
    document.execCommand("copy");
  };

  span.addEventListener("copy", function (event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", span.textContent);
      console.log(event.clipboardData.getData("text"));
    }
  });

  return (
    <div>
      <h1>Get in touch with me!</h1>

      <form className="form" onSubmit={onSubmit}>
        <div className="row">
          <label className="col-25">Your Name:</label>
          <div className="col-75">
            <input
              name="name"
              type="text"
              placeholder="Your Name..."
              className="form-input"
              required
            />
          </div>
        </div>
        <div className="row">
          <label className="col-25">Email:</label>
          <div className="col-75">
            <input
              name="email"
              type="text"
              placeholder="Your Email Address..."
              className="form-input"
              required
            />
          </div>
        </div>
        <div className="row">
          <label className="col-25">Your Message:</label>
          <div className="col-75">
            <textarea
              name="message"
              type="text"
              placeholder="Your Message..."
              className="form-input"
              id="form-message"
              required
            />
          </div>
        </div>
        <div id="submit">
          <button className="buttonLink">Send message</button>
        </div>
      </form>

      <div className="bottom-section">
        <p>Alternatively:</p>

        <p>
          To send me an email directly,{" "}
          <a
            href="mailto:kuljeetpanesar14@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            click here.
          </a>
        </p>

        <p>
          Click to copy my email address: <span>kuljeetpanesar14@gmail.com</span>
        </p>

        <p>
          You can also get in touch with me via my{" "}
          <a
            href="https://www.linkedin.com/in/kuljeetpanesar"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
