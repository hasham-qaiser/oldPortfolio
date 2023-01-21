import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import coursera from "../assets/coursera.svg";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

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
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
        object-center"
          src={coursera}
          alt=""
        />

        <div className="px-0 md:px-10">
          <h3>Professional Certificate </h3>
          <h4 className="text-4xl font-light">Google UX Design</h4>
          <p className="font-bold text-2xl mt-1"></p>
          <div className="flex space-x-2 my-2"></div>
          <h1>
            <a href="https://www.coursera.org/account/accomplishments/professional-cert/C28PC62YVD3T">
              View Certificate
            </a>
          </h1>
          <p className="uppercase py-5 text-gray-300"> Nov 2021-Aug 2022 </p>
          <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>
              Follow the design process: empathize with users, define pain
              points, ideate solutions, create wireframes and prototypes, test
              and iterate on designs.
            </li>
            <li>
              Understand the basics of UX research, like planning research
              studies, conducting interviews and usability studies, and
              synthesizing research results.
            </li>
            <li>
              Apply foundational UX concepts, like user-centered design,
              accessibility, and equity-focused design.
            </li>
            <li>
              Create a professional UX portfolio that includes 3 end-to-end
              projects: a mobile app, a responsive website, and a cross-platform
              experience.
            </li>
          </ul>
        </div>
      </motion.div>
    </article>
  );
}

export default ExperienceCard;
