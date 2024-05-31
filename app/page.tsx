'use client';

import "./globals.css";
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { ReactTyped } from "react-typed";
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
        src="/video.mp4" 
        autoPlay 
        loop 
        muted 
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
        <h1 className="text-3xl md:text-4xl text-center font-bold mb-4 mx-2 md:mx-0">ŽELIŠ BITI DIO  <ReactTyped className="text-red-600" strings={["POZITIVNE PRIČE", "ODLIČNOG DRUŠTVA", "NEZABORAVNE ZABAVE"]} typeSpeed={80} backSpeed={125} loop/>?</h1>

          <button className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded-md hover:rounded-full">
            <Link href="/pridruzi_se">
            PRIDRUŽI SE
            </Link>
          </button>
        </div>

      <div className="absolute bottom-28 left-4 flex space-x-4 z-20">
        <Link href="https://www.instagram.com/street.fleet.crew/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white w-8 h-8 hover:text-gray-300 transition duration-300" />
        </Link>

        <Link href="https://www.youtube.com/@streetfleetcrew8848" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-white w-8 h-8 hover:text-gray-300 transition duration-300" />
        </Link>
        
      </div>
    </div>
  );
}
