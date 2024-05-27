'use client'

import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png"
import { useState } from "react";

const Nav = () => {
    const [navVisible, setNavVisible] = useState(false);

    const handleChange = () => {
        setNavVisible(!navVisible);
    }

    return (
        <div className="wrapper flex justify-between items-center p-4 bg-[#c51a1d] w-full">
            <div className="title ml-3 flex items-center">
                <Link href="/"><Image src={logo} className="h-full max-h-[3rem] md:max-h-[4rem] w-auto" alt="logo" /></Link>
            </div>

            <ul className="large-navbar hidden lg:flex lg:justify-center lg:items-center mr-6">
                <Link href="/o_nama" className="mx-3 text-lg text-white hover:font-semibold hover:scale-110 transition-all duration-300">O Nama</Link>
                <Link href="/eventi" className="mx-3 text-lg text-white hover:font-semibold hover:scale-110 transition-all duration-300">Eventi</Link>
                <Link href="/pridruzi_se" className="mx-3 text-lg text-white hover:font-semibold hover:scale-110 transition-all duration-300">Pridruži se</Link>
            </ul>

            <div className="burger-menu flex lg:hidden">
                {!navVisible ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-white hover:cursor-pointer" onClick={handleChange}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-white hover:cursor-pointer" onClick={handleChange}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                )}
            </div>

            <section className={`absolute top-14 right-5 bg-red-400 rounded-md shadow-md md:top-9 xs:right-[10%] ${navVisible ? 'block' : 'hidden'} md:hidden`}>
                <hr />
                <Link href="/o_nama" className="block text-center py-2 mx-3 text-md text-white hover:font-semibold hover:scale-110 transition-all duration-300">O Nama</Link>
                <hr />
                <Link href="/eventi" className="block text-center py-2 mx-3 text-md text-white hover:font-semibold hover:scale-110 transition-all duration-300">Eventi</Link>
                <hr />
                <Link href="/pridruzi_se" className="block text-center py-2 mx-3 text-md text-white hover:font-semibold hover:scale-110 transition-all duration-300">Pridruži se</Link>
                <hr />
            </section>
        </div>
    );
}

export default Nav;
