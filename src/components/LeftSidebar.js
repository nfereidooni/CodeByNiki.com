import React from "react";
import Image from 'next/image';
import Headshot from '../../public/images/niki-headshot-circle.png'

const LeftSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-1/4 bg-gray-900 text-white p-8 flex flex-col justify-center">
      <Image 
        src={Headshot} 
        alt="Niki Fereidooni headshot" 
        width={150} 
        height={150}
        className="rounded-full mb-4"
      />
      <h1 className="text-4xl font-bold">Niki Fereidooni</h1>
      <p className="text-xl mt-2">Front End Developer</p>
      <p className="mt-4">
        Crafting elegant, accessible web solutions with precision and care.
      </p>
      <nav className="mt-8">
        <ul className="flex flex-col space-y-4">
          <li>
            <a href="#about" className="hover:text-pink-400">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-pink-400">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-pink-400">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
