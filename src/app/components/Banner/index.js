import React from "react";
import styles from "./banner.module.css";

const Banner = ({ artImage }) => {
  return (
    <div className={`${styles.heroImage} ${artImage ? styles.artImage : ""}`}>
      <div className={styles.heroText}>
        {artImage ? "ART CRIMES" : "MOST WANTED"}
      </div>
    </div>
  );
};

export default Banner;
