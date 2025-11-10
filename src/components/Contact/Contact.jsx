import React, { useRef } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";

export const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rx1dp2s",  //  Your EmailJS Service ID
        "template_szie6vr", //  Your EmailJS Template ID
        formRef.current,
        "BwU6hsFQNa3dElXwH" //  Your EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully! I’ll get back to you soon.");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Contact Me</h2>
      <p className={styles.subtitle}>
        LET’S <span>Talk About Ideas</span>
      </p>

      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <div className={styles.icon}>📍</div>
            <div>
              <h4>Address</h4>
              <p>23 A North kamarajar colony,
                Mannachanallur,Trichy-621005.
              </p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.icon}>✉️</div>
            <div>
              <h4>Email</h4>
              <p>baishwarya357@gmail.com</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.icon}>📞</div>
            <div>
              <h4>Phone</h4>
              <p>+91 936 132 3273</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.formRow}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Full Name *"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email Address *"
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Your Subject *"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message *"
            required
          ></textarea>

          <div className={styles.footer}>
            <label className={styles.checkbox}>
              <input type="checkbox" required /> Accept the terms and conditions.
            </label>
            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
