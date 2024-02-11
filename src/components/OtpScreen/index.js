import React from "react";
import styles from "./styles.module.css";
import { HomePageImages } from "@/constant/Constant";
const OtpScreen = () => {
  let contact = "6264267100";
  return (
    <div className={styles.main_container}>
      <div className={styles.otp_modal}>
        <div className={styles.otp_img}>
          <img src={HomePageImages.otpImage} />
        </div>
        <p className={styles.verify_otp}>Verify with OTP</p>
        <p>Sent otp to {contact}</p>
      </div>
    </div>
  );
};

export default OtpScreen;
