import { IoMdMail } from "react-icons/io";
import styles from "./contacts.module.css";
import { IoLocation } from "react-icons/io5";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ScaleLoader} from "react-spinners";

//---------------- meail validation
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [spin, setspin] = useState(false);

  const handleSubmit = (e) => {
    setspin(true);
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = import.meta.env.VITE_serviceId;
    const templateId = import.meta.env.VITE_templateId;
    const publicKey = import.meta.env.VITE_publicKey;

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Krishna",
      message: message,
    };

    //----------- validing entered email

    const result = validateEmail(email);

    if (result) {
      // Send the email using EmailJS
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          setspin(false);
          console.log("Email sent successfully!", response);
          alert("Message sent successfully!");
          setEmail("");
          setName("");
          setMessage("");

        })
        .catch((error) => {
          console.error("Error sending email:", error);
          setspin(false);
        });
    } else {
      alert("Enter correct Email address!");
    }
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.headingContainer}>
          <h1 className={styles.aboutSection}>
            Contacts
            <span>
              <IoMdMail size={21} />
            </span>
          </h1>

          <hr className={styles.hrLine} />
        </div>

        <div className={styles.containerContent}>
          <div className={styles.inputsContact}>
            <h4>Contact</h4>
            <div className={styles.contactForm}>
              <form action="#" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  className={styles.inputsField}
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  type="email"
                  placeholder="email"
                  id="email"
                  className={styles.inputsField}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

                <textarea
                  name="message"
                  id="msg"
                  placeholder="message"
                  className={styles.inputsField}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
                <div className={styles.sendbtn}>
                  <input type="submit" value={`SEND MESSAGE`} />{" "}
                  {spin && (
                    <ScaleLoader
                    color="#36d7b7"
                    height={10}
                    width={6}
                    size={10.5}
                  />
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className={styles.textInfo}>
            <h4>Get In Touch</h4>

            <ul>
              <li>
                <IoLocation></IoLocation> Siwan,Bihar
              </li>
              <li>
                <IoMdMail></IoMdMail> kishanyadavcs21@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
