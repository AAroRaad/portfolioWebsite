import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa";
import Link from "next/link";
import React from "react";

interface SocialProps {
  containerStyles: string;
  iconStyles?: string;
}

const socials = [
  {icon: <FaGithub />, path: ""},
  {icon: <FaLinkedinIn />, path: ""},
  {icon: <FaYoutube />, path: ""},
  {icon: <FaTwitter />, path: ""},
]
const Social: React.FC<SocialProps> = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
      return (
        <Link href={item.path} key={index} className={iconStyles}>
          {item.icon}
        </Link>
      );
    })}
  </div>;
};

export default Social;
