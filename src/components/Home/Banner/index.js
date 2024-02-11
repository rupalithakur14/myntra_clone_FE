import React from "react";
import styles from "./styles.module.css";
import { HomePageImages } from "@/constant/Constant";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className="w-[50vw]">
        <img className="w-full h-full" src={HomePageImages.bannerImageForMen} />
      </div>
      <div className="w-[50vw]">
        <img
          className="w-full h-full"
          src={HomePageImages.bannerImageForWomen}
        />
      </div>
    </div>
  );
};

export default Banner;
