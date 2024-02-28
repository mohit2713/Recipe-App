import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGitSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div className="text-start">
          <h1 className="w-full text-3xl text-white font-bold ">
            Yum<span className="text-orange-700 ">Eats</span>
          </h1>
          <p className="pt-4">
            Recipe Sharing Web App Project is a web-based technology that will
            share online cooking experiences.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} className="cursor-pointer" />
            <FaInstagram size={30} className="cursor-pointer" />
            <FaTwitterSquare size={30} className="cursor-pointer" />
            <FaGitSquare size={30} className="cursor-pointer" />
            <FaDribbbleSquare size={30} className="cursor-pointer" />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-3 ">
          <div>
            <h6 className="font-medium text-[#9b9b9b] ">Location</h6>
            <ul>
              <li className="py-2 text-sm">INDIA</li>
              <li className="py-2 text-sm">AUSTRALIA</li>
              <li className="py-2 text-sm">PHILLIPINE</li>
              <li className="py-2 text-sm">USA</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b] ">Location</h6>
            <ul>
              <li className="py-2 text-sm">INDIA</li>
              <li className="py-2 text-sm">AUSTRALIA</li>
              <li className="py-2 text-sm">PHILLIPINE</li>
              <li className="py-2 text-sm">USA</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b] ">Location</h6>
            <ul>
              <li className="py-2 text-sm">INDIA</li>
              <li className="py-2 text-sm">AUSTRALIA</li>
              <li className="py-2 text-sm">PHILLIPINE</li>
              <li className="py-2 text-sm">USA</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b] ">Location</h6>
            <ul>
              <li className="py-2 text-sm">INDIA</li>
              <li className="py-2 text-sm">AUSTRALIA</li>
              <li className="py-2 text-sm">PHILLIPINE</li>
              <li className="py-2 text-sm">USA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
