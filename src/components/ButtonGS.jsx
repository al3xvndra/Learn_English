import React from "react";
import { motion } from "framer-motion";

const ButtonGS = ({ text }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-secondary hover:bg-primary text-white font-medium my-8 p-3 rounded-md w-[150px] mx-auto"
    >
      {text}
    </motion.button>
  );
};

export default ButtonGS;
