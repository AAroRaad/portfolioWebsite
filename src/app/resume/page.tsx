"use client";

import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiAdobexd,
} from "react-icons/si";

// about data
const about = {
    title: "About me",
    description:
      "Passionate professional with diverse expertise and a strong background in Front-End Development. " +
        "Dedicated to delivering high-quality results and open to remote and hybrid opportunities",
    info: [
      {
        fieldName: "Name",
        fieldValue: "AAro Raad",
      },
      {
        fieldName: "Phone",
        fieldValue: "09363715596",
      },
      {
        fieldName: "Experience",
        fieldValue: "4+ Years",
      },
      {
        fieldName: "Skype",
        fieldValue: "aaro.raad",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Iranian",
      },
      {
        fieldName: "Email",
        fieldValue: "aaro.se7en@gmail.com",
      },
      {
        fieldName: "Remote",
        fieldValue: "Available",
      },
      {
        fieldName: "Hybrid",
        fieldValue: "Available",
      },
      {
        fieldName: "Languages",
        fieldValue: "Kurdish, Persian, English",
      },
    ],
  }

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "My experiences in front-end programming, UI/UX, and graphic design are as follows. " +
      "Currently, I am working as a front-end developer.",
  items: [
    {
      company: "Jin Co.",
      position: "Front-End Developer",
      duration: "Dec 2021 - Present",
    },
    {
      company: "Jin Co.",
      position: "UI/UX Designer",
      duration: "Summer 2022",
    },
    {
      company: "Educational Projects",
      position: "Front-End Developer",
      duration: "Jul 2020 - Dec 2021",
    },
    {
      company: "ComeBack Co.",
      position: "UI/UX & Graphic Designer",
      duration: "Feb 2021 - Jun 2021",
    },
    {
      company: "Jin Co.",
      position: "UI/UX & Graphic Designer",
      duration: "Feb 2020 - Jan 2021",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "My field of study was Urban Planning, and I earned my bachelor's degree in this field. " +
      "Then, I received extensive training, first in UI/UX and later in front-end programming, " +
      "and I have completed many educational projects in these areas.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Front-End Development",
      duration: "2024",
    },
    {
      institution: "The Ultimate TypeScript Course",
      degree: "Front-End Development",
      duration: "2023",
    },
    {
      institution: "Mastering Next.js 13 with TypeScript",
      degree: "Front-End Development",
      duration: "2023",
    },
    {
      institution: "React - The Complete Guide",
      degree: "Front-End Development",
      duration: "2022",
    },
    {
      institution: "The Ultimate React Course",
      degree: "Front-End Development",
      duration: "2021",
    },
    {
      institution: "Project-based React training",
      degree: "Front-End Development",
      duration: "2020",
    },
    {
      institution: "User Experience Design Essentials – Adobe XD UI UX Design",
      degree: "UI/UX Design",
      duration: "2019",
    },
    {
      institution: "Comprehensive User Interface (UI) Design Course",
      degree: "UI/UX Design",
      duration: "2019",
    },
    {
      institution: "User Experience (UX) Specialist Course",
      degree: "UI/UX Design",
      duration: "2019",
    },
    {
      institution: "Payamnoor University",
      degree: "Bachelor of Urban Engineering",
      duration: "2013 - 2018",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "The skills I have learned during this time are as follows:",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiAdobexd />,
      name: "adobe xd",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/*content*/}
          <div className="min-h-[70vh] w-full">
            {/*experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col
                           justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*education*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col
                           justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*skills*/}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <h3 className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] mb-10 md:mb-0">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col gap-4 lg:gap-0 lg:flex-row justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                              <div className='text-lg group-hover:text-accent transition-all duration-300 lg:hidden capitalize'>
                                {skill.name}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/*about*/}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 mb-10 xl:mb-0'>
                  {about.info.map((item, index) => {
                    return (
                        <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                          <span className='text-white/60'>{item.fieldName}</span>
                          <span className='text-xl'>{item.fieldValue}</span>
                        </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
