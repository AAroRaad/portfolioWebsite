import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTelegram, FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import React from "react";

interface SocialProps {
  containerStyles: string;
  iconStyles?: string;
}

const socials = [
  { icon: <FaGithub />, path: "https://www.github.com/AAroRaad" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/mohammad-karamveysehnezhad-93831b183/",
  },
  { icon: <FaInstagram />, path: "https://www.instagram.com/aaro.raad/" },
  { icon: <FaTelegram />, path: "https://t.me/AAro_7" },
  { icon: <FaWhatsapp />, path: "https://wa.me/qr/WCGG6XQ2MCI6J1" }
];
const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            className={iconStyles}
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
