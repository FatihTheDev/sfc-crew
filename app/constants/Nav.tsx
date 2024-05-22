'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const Nav = () => {

    const[navVisible, setNavVisible] = useState(false);

    const handleChange = () => {
        setNavVisible(!navVisible);
    }

    return(
        <div className="wrapper flex justify-between items-center p-4 bg-red-500 w-full">
            <div className="title ml-3">
                <h1 className="text-4xl text-white font-bold">SFC</h1>
                <h2 className="text-md text-white">Street Fleet Crew</h2>
            </div>

            <ul className="large-navbar hidden lg:flex lg:justify-center lg:items-center mr-6">

                <Link href="/" className="mx-3 text-lg text-white hover:font-semibold hover:scale-110 transition-all duration-300">O Nama</Link>
                <Link href="/eventi" className="mx-3 text-lg text-white hover:font-semibold hover:scale-110 transition-all duration-300">Eventi</Link>
                <Link href="/pridruzi_se" className="mx-3 text-lg text-white hover:font-semibold hover:scale-110 transition-all duration-300">Pridruži se</Link>

            </ul>

            <div className="burger-menu flex lg:hidden">

                { !navVisible ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 text-white hover:cursor-pointer" onClick={handleChange}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 text-white hover:cursor-pointer" onClick={handleChange}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                } 

            </div>

            <section className="absolute top-14 right-5 bg-red-400 rounded-md md:top-9 xs:right-[10%] shadow-md md:hidden">
                <Link href="/" className={navVisible ? "block text-center py-2 mx-3 text-md text-white hover:font-semibold hover:scale-110 transition-all duration-300" : "hidden"}>O Nama</Link>
                <hr />
                <Link href="/eventi" className={navVisible ? "block text-center py-2 mx-3 text-md text-white hover:font-semibold hover:scale-110 transition-all duration-300" : "hidden"}>Eventi</Link>
                <hr />
                <Link href="/pridruzi_se" className={navVisible ? "block text-center py-2 mx-3 text-md text-white hover:font-semibold hover:scale-110 transition-all duration-300" : "hidden"}>Pridruži se</Link>
                <hr />
            </section>
        
        </div>
    )
}

export default Nav;