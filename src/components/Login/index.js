// pages/Login.js
import React, { useState } from "react";

import styles from "./styles.module.css"; // Import CSS module
import { useRouter } from "next/navigation";
import { HomePageImages } from "@/constant/Constant";
import axios from "axios";
import { baseURL } from "@/network/axios";
import { endPoints } from "@/network/endPoints";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contact.length === 10 && /^\d+$/.test(contact)) {
      const body = {
        mobile: contact,
      };
      axios
        .post(baseURL + endPoints.getOtp, body)
        .then((res) => {
          console.log(res);
          router.push("/otpLogin");
        })
        .catch((err) => console.log(err));
      // setContact(e.target.value);
    } else setError("Please enter a valid mobile number(10 digits)");
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.img}>
          <img src={HomePageImages.loginImage} />
        </div>
        <div className={styles.formContainer}>
          {" "}
          {/* Use CSS module class */}
          <h1 className={styles.login_head}>
            Login <span className="text-sm font-normal">or</span> Signup
          </h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.input_div}>
              <p>+91</p>
              <p className="px-1">|</p>
              <input
                type="number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Mobile Number"
                required
              />
            </div>
            {error && <p className={styles.errorMessage}>{error}</p>}{" "}
            {/* Use CSS module class */}
            <p className={styles.trouble_txt}>
              By continuing, I agree to the{" "}
              <a className={styles.help_txt} href="/termsofuse">
                Terms of Use
              </a>{" "}
              &
              <a className={styles.help_txt} href="/privacypolicy">
                Privacy Policy
              </a>
            </p>
            <button type="submit">Continue</button>
          </form>
          <p className={styles.trouble_txt}>
            Have trouble logging in?
            <a className={styles.help_txt} href="/signup">
              Get Help
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
