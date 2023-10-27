import React from "react";
import { motion } from "framer-motion";
import styles from "./banner.module.css";

const Banner = ({ artImage }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`${styles.heroImage} ${artImage ? styles.artImage : ""}`}
    >
      <div className={styles.heroText}>
        {artImage ? "ART CRIMES" : "MOST WANTED"}
      </div>
    </motion.div>
  );
};

export default Banner;
