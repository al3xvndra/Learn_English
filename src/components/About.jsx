import React from "react";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import teacher from "../assets/teacher.jpg";

const About = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-full py-32 flex bg-white m-auto px-4 text-secondary"
    >
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
          className="my-auto md:pl-4 flex flex-col"
        >
          <h1 className="text-primary md:text-5xl sm:text-4xl text-4xl font-bold py-3">
            Welcome to Your Journey of Learning English!
          </h1>
          <p className="text-black mb-11">
            I’m Edward, a passionate and experienced English teacher dedicated
            to helping you achieve your language goals. With 2 years of teaching
            experience and a deep love for the English language, I’ve had the
            pleasure of working with students from all over the world, from
            beginners to advanced learners. My approach is friendly, flexible,
            and tailored to meet your individual needs, ensuring that each
            lesson is both enjoyable and effective.
          </p>
          <p className="text-black md:text-xl font-bold mb-4">
            American English Conversations
          </p>
          <p className="text-black">
            English is more than just a language; it's a gateway to countless
            opportunities. Whether you're looking to advance your career, travel
            with confidence, or simply connect with people from different
            cultures, mastering English opens doors.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary hover:bg-primary text-white font-medium p-3 rounded-md w-[150px] mt-6 mb-6 mx-auto lg:ml-0 lg:mb-0"
          >
            Get started
          </motion.button>
        </motion.div>
        <motion.img
          src={teacher}
          alt="usa flag"
          initial={{ opacity: 0, y: 60 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
          className="w-[500px] m-auto"
        />
      </div>
    </div>
  );
});

export default About;
