import React from "react";
import styles from "./styles.module.css";

const ProductList = () => {
  const arr = ["", "", "", "", ""];
  return (
    <div className={styles.main_wrapper}>
      {arr?.map((item, index) => {
        return (
          <div key={index} className={styles.card_wrapper}>
            <img
              src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/26757388/2024/1/3/6ee60183-9476-4d0a-9835-a3e4a82138a21704256378796VersaceMenDialGoldTonedStainlessSteelStrapsAnalogueWatchVE7H1.jpg"
              className={styles.card_img}
            />
            <p className={styles.brand_name}>Wolf</p>
            <p className={styles.prod_name}>Men Stainless Steel Watch</p>
            <p className={styles.price}>Rs. 99500</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
