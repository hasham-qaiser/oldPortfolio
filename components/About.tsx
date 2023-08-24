import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt=""
        className="w-40 h-40 mt-32 mb-2
        
        sm:mt-10 sm:-mb-20 md:mb-0 flex-shrink-0 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[38vw] xl:h-[65vh] xl:max-w-[500px]"
      />

      <div
        className="space-y-5
      
      sm:space-y-10 px-0 md:px-10 overflow-y-auto"
      >
        <h4 className="text-4xl font-semibold">
          <span className="underline decoration-[#F7AB0A]/50">
            Frontend Dev / Designer / Thinker
          </span>
        </h4>
        <p className="justify-text text-base">
          Hi there! My name is Hasham, and I am a front-end developer based in
          California. I'm interested in web development, UI/UX design, and data
          analysis. I love solving difficult problems and coming up with
          creative solutions to make websites and apps work beautifully. I enjoy
          playing around and learning new programming languages, frameworks, and
          libraries. I'm always looking for a new challenge to push my skills
          further. I'm currently looking for a full-time role! Please let me
          know if you have any opportunities to share.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
