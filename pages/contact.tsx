import styles from "../styles/Contact.module.css";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/postcontact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: message,
        }),
      });

      const data = await response.json();
      alert(`Form Received Successfully!!`);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    switch (target.name) {
      case "name":
        setName(target.value);
        break;
      case "email":
        setEmail(target.value);
        break;
      case "phone":
        setPhone(target.value);
        break;
      case "message":
        setMessage(target.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Contact us</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.input_box}>
            <label htmlFor="InputName" className={styles.form_label}>
              Your Name
            </label>
            <input
              type="text"
              value={name}
              name="name"
              onChange={handleChange}
              className={styles.form_input}
              id="InputName"
            />
          </div>
          <div className={styles.input_box}>
            <label htmlFor="InputEmail1" className={styles.form_label}>
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              name="email"
              className={styles.form_input}
              id="InputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We will never share your email with anyone else.
            </div>
          </div>
          <div className={styles.input_box}>
            <label htmlFor="InputPhone" className={styles.form_label}>
              Phone
            </label>
            <input
              type="tel"
              value={phone}
              name="phone"
              onChange={handleChange}
              className={styles.form_input}
              id="InputPhone"
            />
          </div>
          <div className={styles.input_box}>
            <label htmlFor="InputMessage" className={styles.form_label}>
              Your Message
            </label>
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              id="InputMessage"
              rows={4}
              className={styles.form_input}
            ></textarea>
          </div>
          <button type="submit" className={styles.submit_btn}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
