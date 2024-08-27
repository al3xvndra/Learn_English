import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { forwardRef } from "react";
import { motion } from "framer-motion";

const Contact = forwardRef((props, ref) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_34nnj2f", "template_jjiw3vc", form.current, {
        publicKey: "mJhM2mHS_Y-ijxMo-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          window.alert("Message sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          window.alert("Error!");
        }
      );
  };

  return (
    <div ref={ref} className="w-full py-24 text-white px-4 contact">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 pr-4">
          <h1 className="md:text-4xl text-3xl font-bold pb-3">
            Sign up for a free class!
          </h1>
          <p className="mb-4 lg:mb-0 pt-14">
            Whether you're starting from scratch or looking to refine your
            existing skills, I’m here to guide you every step of the way. My
            personalized approach ensures that each lesson is tailored to your
            unique needs and goals, making your learning journey both effective
            and enjoyable.
          </p>
          <p className="pt-6">
            Whether you need to build confidence in conversation, enhance your
            grammar, or prepare for an important exam, I’ll provide the support
            and expertise you need to succeed.
          </p>
          <p className="pt-6">
            Contact me today to schedule your free 15-minute conversation, where
            we’ll discuss your goals, assess your current level, and create a
            customized plan to help you achieve fluency. Take the first step
            towards mastering English and open the door to new opportunities,
            experiences, and connections!
          </p>
        </div>
        <div className="my-auto col-start-1 col-end-2 lg:col-start-3 lg:col-end-4">
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 items-center w-full text-black"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                className="p-3 flex w-full rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-3 flex w-full rounded-md"
              />
              <input
                type="text"
                name="message"
                placeholder="Message"
                className="p-3 pb-16 flex w-full rounded-md"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-secondary text-white font-medium p-3 rounded-md w-[150px] mx-auto mt-8 sm:mt-0 sm:ml-0"
              >
                Send
              </motion.button>
            </form>
          </div>
          <p className="mt-3">We care about the protection of your data. </p>
          <p>
            Read our{" "}
            <span className="text-primary underline hover:cursor-pointer hover:text-secondary">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
});

export default Contact;
