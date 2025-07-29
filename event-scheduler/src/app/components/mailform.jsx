"use client";
import styles from "./mailform.module.scss";
import Form from "next/form";

export default function MailForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("/api/nodemailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        alert("Message sent!");
        e.target.reset();
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          className={styles.textarea}
          name="message"
          placeholder="Message/Question"
          rows="4"
          required
        />
        <button className={styles.button} type="submit">
          Submit
        </button>
      </Form>
    </>
  );
}
