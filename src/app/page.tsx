import { Button } from "@mantine/core";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Button className={styles.btn}>Get started !</Button>
    </main>
  );
}
