import Image from "next/image";
import styles from "./page.module.scss";
import Form from "next/form";
import MailForm from "./components/mailform";

export default function Home() {
  return (
    <>
      <MailForm />
    </>
  );
}
