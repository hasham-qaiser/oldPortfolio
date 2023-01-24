import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import zPic from "../assets/zPic.jpg";
import Link from "next/link";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey, This is Hasham",
      "I'm a Front-End Developer",
      "UX Designer",
      "And community builder",
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 35,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={zPic}
        alt="my pic"
      />
      <div className="z-20">
        <h2 className=" tracking-[10px] text-sm uppercase text-gray-500 pb-2 sm:tracking-[15px]">
          Developer & Designer
        </h2>
        <h1 className="text-[22px] pb-12 h-8 px-2 sm:pb-8 sm:h-24 lg:h-32 2xl:h-1/3 sm:text-5xl lg:text-6xl font-semibold sm:px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
