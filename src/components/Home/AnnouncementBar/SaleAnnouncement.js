import React from "react";
import styles from "./styles.module.css";

const SaleAnnouncement = () => {
  return (
    <div className={styles.main_container}>
      <p className={styles.big_txt}>SALES END IN</p>
      <p className={styles.small_txt}>
        <span className={styles.red_txt}>02</span> Days :{" "}
        <span className={styles.red_txt}>09</span> H :{" "}
        <span className={styles.red_txt}>15</span> M :{" "}
        <span className={styles.red_txt}>02</span> S
      </p>
    </div>
  );
};

export default SaleAnnouncement;
