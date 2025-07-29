import Image from "next/image";
import styles from "./page.module.scss";
import Form from "next/form";

export default function Home() {
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
