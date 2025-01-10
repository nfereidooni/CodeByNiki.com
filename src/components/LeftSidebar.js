import React from "react";
import Image from 'next/image';
import Headshot from '../../public/images/niki-headshot-circle.png'

const LeftSidebar = () => {
  return (
    <aside className="md:fixed md:left-0 md:top-0 md:h-full w-full md:w-1/2 lg:w-1/4 bg-gray-900 text-white p-8 md:flex md:flex-col md:justify-center">
      <Image 
        src={Headshot} 
        alt="Niki Fereidooni headshot" 
        width={150} 
        height={150}
        className="rounded-full mb-4"
      />
      <h1 className="text-4xl font-bold">Niki Fereidooni</h1>
      <p className="text-xl mt-2 font-normal">Front End Developer</p>
      <p className="mt-4 font-normal">
        Crafting elegant, accessible web solutions with precision and care.
      </p>
      <nav className="mt-8">
        <ul className="flex flex-col space-y-4">
          <li>
            <a href="#about" className="font-normal hover:text-pink-400">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="font-normal hover:text-pink-400">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="font-normal hover:text-pink-400">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
