import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";

const CardList = () => {
  return (
    <div style={styles.container}>
      CardList
      <Pagination/>
    </div>
  );
};

export default CardList;
