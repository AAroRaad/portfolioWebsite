"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGitlab } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  gitlab: string;
}

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Front-End developer for the online doctor appointment scheduling project.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Postman" },
      { name: "Gitlab" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://jimare24.com/",
    gitlab: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description:
      "Front-End developer for the doctor appointment management project",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Postman" },
      { name: "Gitlab" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    gitlab: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Front-End developer for the multi-brand login project.",
    stack: [
      { name: "React.js" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "Postman" },
      { name: "Github" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://login.ahoora.pro/?brand=jimare",
    gitlab: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description:
        "Front-End developer for the portfolio project.",
    stack: [
      { name: "React.js" },
      { name: "Javascript" },
      { name: "Material UI" },
      { name: "Github" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://portfolio-red-alpha-12.vercel.app/",
    gitlab: "",
  },
  {
    num: "05",
    category: "ui/ux",
    title: "project 5",
    description:
        "Ui/Ux Designer for the Jin's administrative panel project.",
    stack: [
      { name: "Adobe Xd" },
      { name: "Adobe Photoshop" },
      { name: "Adobe Illustrator" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://xd.adobe.com/view/a3fdfdee-d01f-427d-a281-e8f0bf1b78eb-f6ae/",
    gitlab: "",
  },
  {
    num: "06",
    category: "ui/ux",
    title: "project 6",
    description:
        "Ui/Ux Designer for the Redesign of comeback android app project.",
    stack: [
      { name: "Adobe Xd" },
      { name: "Adobe Photoshop" },
      { name: "Adobe Illustrator" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://xd.adobe.com/view/be00362a-f6c1-448f-a9c3-8af6c164a929-eb53/",
    gitlab: "",
  },
];

const Work = () => {
  const [project, setProject] = useState<Project>(projects[0]);
  const handleSlideChange = (swiper: any) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2
                className="text-[42px] font-bold leading-none text-white group-hover:text-accent
              transition-all duration-500 capitalize"
              >
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      <span>
                        {item.name}
                        {/* remove the last comma */}
                        {index !== project.stack.length - 1 && ","}
                      </span>
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5
                      flex justify-center items-center group"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.gitlab}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5
                      flex justify-center items-center group"
                      >
                        <BsGitlab className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0
                  z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px]
                  h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
