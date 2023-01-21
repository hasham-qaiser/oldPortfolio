import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logoHq from "../assets/logoHq.png";
import htmlLogo from "../assets/htmlLogo.png";
import cssLogo from "../assets/cssLogo.png";
import jsLogo from "../assets/jsLogo.jpg";
import { Experience } from "../typings";

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
            Freelance Ux Designer & Programmer
          </h4>
          <p className="font-bold text-2xl mt-1">HQ Labs</p>
          <div className="flex space-x-2 my-2"></div>
          <p className="uppercase py-5 text-gray-300">Started 2021-Current</p>
          <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>
              I specialize in creating beautiful, user-friendly websites and
              applications that are optimized for performance.
            </li>
            <li>
              My passion is to create engaging experiences that make people's
              lives easier.
            </li>
            <li>
              I'm always looking for new challenges and opportunities to learn
              and grow as a developer. If you're looking for someone to help you
              bring your ideas to life, I'm your guy!
            </li>
          </ul>
        </div>
      </motion.div>
    </article>
  );
}

export default ExperienceCard;
