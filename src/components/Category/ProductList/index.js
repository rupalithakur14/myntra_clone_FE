import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryData } from "@/Redux/categorySlice";
import { useRouter, useSearchParams } from "next/navigation";

const ProductList = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id, "hhh");
  const arr = ["", "", "", "", ""];
  const { categoryData, isLoading, error } = useSelector(
    (state) => state.categoryData.value
  );

  useEffect(() => {
    dispatch(fetchCategoryData(id));
  }, [id]);

  console.log(categoryData, "jhuh");

  return (
    <div className={styles.main_wrapper}>
      {categoryData?.map((item, index) => {
        return (
          <div key={index} className={styles.card_wrapper}>
            <img src={item?.prodImage1} className={styles.card_img} />
            <p className={styles.brand_name}>Brand</p>
            <p className={styles.prod_name}>{item?.prodName}</p>
            <p className={styles.price}>Rs. {item?.prodPrice}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
