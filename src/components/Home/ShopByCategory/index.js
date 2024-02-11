import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { HomePageImages } from "@/constant/Constant";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "@/Redux/productSlice";
import { useRouter } from "next/navigation";

const ShopByCategory = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const router = useRouter();

  const { productList, isLoading, error } = useSelector(
    (state) => state.product.value
  );

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  console.log(productList, "jjj");

  // const getCategoryData = () => {
  //   const headers = {
  //     authorization: authorization,
  //   };
  //   axios
  //     .get(baseURL + endPoints.homePage.getCategory, { headers: headers })
  //     .then((res) => {
  //       setData(res?.data);
  //       console.log(res, "ress");
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   getCategoryData();
  // }, []);

  const arr = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  return (
    <div className={styles.main_container}>
      <img src={HomePageImages.shopByCategory} />
      <div className={styles.map_wrpper}>
        {productList?.map((item, index) => {
          return (
            <div
              className={styles.card}
              key={index}
              onClick={() => router.push(`/${item.catName}?id=${item?._id}`)}
            >
              <img src={item?.catImage} className={styles.card_img} />
              <p className={styles.card_desc1}>{item?.catName}</p>
              <p className={styles.card_head}>50-80% OFF</p>
              <p className={styles.card_desc}>Shop Now</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopByCategory;
