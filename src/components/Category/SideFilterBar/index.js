import React from "react";
import styles from "./styles.module.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { categoryData } from "@/constant/Constant";

const SideFilterBar = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.header_wrapper}>
        <p className={styles.heading}>FILTERS</p>
        <p className={styles.clear_all_text}>CLEAR ALL</p>
      </div>
      <div className={styles.border_wrapper}>
        <FormControl className={styles.filter_wrapper}>
          {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            {categoryData.personCategory.map((item, index) => {
              return (
                <div className="h-fit mb-[7px]">
                  <FormControlLabel
                    className="!h-0"
                    value={item}
                    control={<Radio />}
                    label={<p className={styles.person_categ}>{item}</p>}
                  />
                </div>
              );
            })}
          </RadioGroup>
        </FormControl>
        <FormControl className={styles.filter_wrapper}>
          <FormLabel
            id="demo-controlled-radio-buttons-group"
            className={styles.filter_head}
          >
            CATEGORIES
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            {categoryData.categoryData.map((item, index) => {
              return (
                <div className="h-fit mb-[7px]">
                  <FormControlLabel
                    className="!h-0"
                    value={item}
                    control={<Radio />}
                    label={<p className={styles.filters}>{item}</p>}
                  />
                </div>
              );
            })}
          </RadioGroup>
        </FormControl>
        <FormControl className={styles.filter_wrapper}>
          <FormLabel
            id="demo-controlled-radio-buttons-group"
            className={styles.filter_head}
          >
            CATEGORIES
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            {categoryData.categoryData.map((item, index) => {
              return (
                <div className="h-fit mb-[7px]">
                  <FormControlLabel
                    className="!h-0"
                    value={item}
                    control={<Radio />}
                    label={<p className={styles.filters}>{item}</p>}
                  />
                </div>
              );
            })}
          </RadioGroup>
        </FormControl>
        <FormControl className={styles.filter_wrapper}>
          <FormLabel
            id="demo-controlled-radio-buttons-group"
            className={styles.filter_head}
          >
            PRICE
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            {categoryData.price_range.map((item, index) => {
              return (
                <div className="h-fit mb-[7px]">
                  <FormControlLabel
                    className="!h-0"
                    value={item}
                    control={<Radio />}
                    label={<p className={styles.filters}>{item}</p>}
                  />
                </div>
              );
            })}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default SideFilterBar;
