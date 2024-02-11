import { Breadcrumbs, Button, Link } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import { useParams, useRouter } from "next/navigation";
import SideFilterBar from "../SideFilterBar";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProductList from "../ProductList";

const CategoryPage = () => {
  const params = useParams();
  const router = useRouter();

  const count = 12999;

  return (
    <div className={styles.main_container}>
      <div className={styles.navigation}>
        <Breadcrumbs aria-label="breadcrumbs">
          <Link
            color="primary"
            href="#condensed-with-menu"
            className={styles.link_item}
          >
            Home
          </Link>
          <Link
            color="primary"
            href="#condensed-with-menu"
            className={`!font-bold ${styles.link_item}`}
          >
            {params?.category}
          </Link>
        </Breadcrumbs>
        <div className={styles.head_wrapper}>
          <p className={styles.category_name}>{params?.category}</p>{" "}
          <p className={styles.item_count}>- {count} items</p>
        </div>
      </div>
      <div className={styles.category_wrapper}>
        <SideFilterBar />
        <div className="w-full pr-[25px]">
          <div className={styles.sub_header_wrapper}>
            <div className={styles.left_sub_header}>
              {["Bundles", "Country of origin", "Size"].map((item, index) => {
                return (
                  <div className="cursor-pointer">
                    {item}{" "}
                    <KeyboardArrowUpIcon
                      color="#282c3f"
                      width={"15px"}
                      height={"15px"}
                    />
                  </div>
                );
              })}
            </div>
            <div className={styles.sort_div}>
              <p>
                Sort by : <span className="font-bold">Recommended</span>
              </p>
              <KeyboardArrowUpIcon
                color={"#282c3f"}
                width={"15px"}
                height={"15px"}
              />
            </div>
          </div>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
