"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I'm a front-end developer specializing in React, Next.js, and Tailwind CSS. I focus on building responsive, " +
        "user-friendly web interfaces and delivering seamless, dynamic experiences across all devices.",
    href: "https://www.linkedin.com/in/mohammad-karamveysehnezhad-93831b183/",
  },
  // {
  //   num: "02",
  //   title: "UI/UX Design",
  //   description:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
  //   href: "",
  // },
  // {
  //   num: "03",
  //   title: "Graphic Design",
  //   description:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
  //   href: "",
  // },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/*top*/}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline group-hover:text-outline-hover
                  text-transparent transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    target='_blank'
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all
                    duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/*title*/}
                <h2 className="text-[42px] font-bold leading-none text-white
                group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/*description*/}
                <p>{service.description}</p>
                {/*border*/}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
