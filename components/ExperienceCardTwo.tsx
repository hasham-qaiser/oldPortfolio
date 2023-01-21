import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logoHq from "../assets/logoHq.png";
import travelPlus from "../assets/travelPlus.png";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={logoHq}
          alt="experience pic"
        />

        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">
            Content Developer & Photographer
          </h4>
          <p className="font-bold text-2xl mt-1">HQ Labs</p>
          <div className="flex space-x-2 my-2"></div>
          <p className="uppercase py-5 text-gray-300"> Jan 2018 - current </p>
          <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>
              Content creator and photographer specializing in creating content
              about tech and mechanical keyboards.
            </li>
            <li>Passionate about technology.</li>
            <li>
              I Provide a build service for people interested in having a custom
              mechanical keyboard build done.
            </li>
            <li>
              I Love to help others find the perfect keyboard or other tech for
              their needs.
            </li>
          </ul>
        </div>
      </motion.div>
    </article>
  );
}

export default ExperienceCard;
