import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { dividerClasses } from "@mui/material";

const SaleAnnouncement = () => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);
  const calculateTimeLeft = () => {
    const difference = +endDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft.seconds]);

  return (
    <div className={styles.main_container}>
      <p className={styles.big_txt}>SALES END IN</p>
      <p className={styles.small_txt}>
        <span className={styles.red_txt}>{timeLeft?.days}</span> Days :{" "}
        <span className={styles.red_txt}>{timeLeft?.hours}</span> H :{" "}
        <span className={styles.red_txt}>{timeLeft?.minutes}</span> M :{" "}
        <span className={styles.red_txt}>{timeLeft?.seconds}</span> S
      </p>
    </div>
  );
};

export default SaleAnnouncement;
