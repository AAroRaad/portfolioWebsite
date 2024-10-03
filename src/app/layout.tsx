import type { Metadata } from "next";
import "./globals.css";
import React, {ReactNode} from "react";
import {JetBrains_Mono, Roboto, Oswald, Titillium_Web} from "next/font/google";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

// const jetBrainsMono = JetBrains_Mono({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
//   variable: "--font-jetBrainsMono",
// });

// const oswald = Oswald({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700"],
//   variable: "--font-oswald",
// });

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titillium",
});

export const metadata: Metadata = {
  title: "Mohammad_KaramVeisehNezhad_Resume",
  description: "Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={titillium.variable}>
        <Header />
        <StairTransition/>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
