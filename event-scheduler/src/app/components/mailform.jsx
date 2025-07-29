import Form from "next/form";
import styles from "./mailform.module.scss";

export default function MailForm() {
  return (
    <>
      <Form className={styles.form}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input
          type="message/question"
          name="message/question"
          placeholder="Message/Question"
        />
        <button type="send">Send</button>
      </Form>
    </>
  );
}
