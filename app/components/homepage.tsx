"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconDownload,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const Homepage = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      id="home"
      className="flex items-start gap-5 h-screen snap-center"
    >
      <TextGenerateEffectText />
    </motion.div>
  );
};

const words =
  "A software developer based in Montreal Canada with a strong background in front-end and back-end development, passionate about ML/AI with a focus on natural language processing and computer vision.";

export function TextGenerateEffectText() {
  return (
    <div className="w-3/4 h-full items-center flex pl-16">
      <div className="flex flex-col ">
        <h1 className="z-50 text-5xl">
          Hi I&apos;m
          <span className="font-bold text-blue-500 pl-7">Omar Elmasaoudi </span>
        </h1>
        <TextGenerateEffect
          duration={2}
          filter={false}
          words={words}
          className="z-50"
        />
        <div className="flex gap-8 z-50 items-center pt-7">
          <button
            className="flex p-3 z-50 placeholder:h-12 animate-shimmer  rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Omars_Resume.pdf";
              link.download = "Omars_Resume.pdf";
              link.click();
            }}
          >
            <IconDownload />
            <span className="pl-3">Download CV</span>
          </button>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}

const SocialIcons = () => {
  return (
    <div className="flex gap-4">
      <SocialIcon url="https://github.com/Omare04" />
      <SocialIcon url="https://www.linkedin.com/in/omar-elmasaoudi/" />
    </div>
  );
};

export default Homepage;
