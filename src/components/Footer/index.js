import React from "react";
import styles from "./styles.module.css";
import { FooterData } from "@/constant/Constant";

const Footer = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.first_row}>
        <div>
          <div>
            <a
              href="https://www.myntra.com/?src=onlineShopping"
              className={styles.list_header}
            >
              Online Shopping
            </a>
            <div className="mt-3">
              {FooterData.onlineshooping.map((item, index) => {
                return (
                  <li key={index} className={styles.list_item}>
                    {item}
                  </li>
                );
              })}
            </div>
          </div>

          <div className="mt-4">
            <a
              href="https://www.myntra.com/?src=onlineShopping"
              className={styles.list_header}
            >
              useful links
            </a>
            <div className="mt-3">
              {FooterData.usefulLinks.map((item, index) => {
                return (
                  <li key={index} className={styles.list_item}>
                    {item}
                  </li>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <a
            href="https://www.myntra.com/?src=onlineShopping"
            className={styles.list_header}
          >
            Cutomer policies
          </a>
          <div className="mt-3">
            {FooterData.customerPolicies.map((item, index) => {
              return (
                <li key={index} className={styles.list_item}>
                  {item}
                </li>
              );
            })}
          </div>
        </div>

        <div>
          <a className={styles.list_header}>Experince myntra app on mobile</a>
          <div className="mt-3 flex">
            <img
              className={styles.footer_download_img}
              src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
            />
            <img
              className={styles.footer_download_img}
              src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
