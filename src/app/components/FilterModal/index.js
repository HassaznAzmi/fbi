import React from "react";
import { motion } from "framer-motion";

const FilterModal = ({ visible, onClose, children }) => {
  if (!visible) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={`flex flex-col fixed w-screen  left-0 bottom-0 bg-inherit z-50 rounded-t-3xl p-4`}
    >
      <button
        className="p-2 text-xl bg-red-400 dark:bg-red-950 mx-2 rounded-lg"
        onClick={onClose}
      >
        Done
      </button>
      {children}
    </motion.div>
  );
};

export default FilterModal;
