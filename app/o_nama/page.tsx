'use client';

import { useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      
      <div className="relative bg-gradient-to-l from-red-100 to-red-300 min-h-screen">
        <div className="relative z-10">
          <h1 className="text-3xl text-red-500 font-bold mt-0 mb-12 pt-6 text-center md:text-4xl">O nama</h1>
          
          <div className="max-w-2xl mx-auto">
            
            <div className="mb-5">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full px-4 py-2 text-left bg-red-500 text-white rounded-md focus:outline-none transition-transform transform hover:scale-105"
              >
                Ko smo mi?
              </button>
              <div className={`${activeIndex === 0 ? "block" : "hidden"} mt-2 px-4 py-2 bg-gray-100 rounded-md transition-all duration-500 ease-in-out transform ${activeIndex === 0 ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'}`}>
                <p className="text-red-600">
                  <span className="font-semibold">Street Fleet Crew</span> je <span className="font-semibold">zajednica strastvenih ljubitelja automobila</span> koja okuplja entuzijaste svih generacija. Naš cilj je stvaranje prostora gdje svaki član može podijeliti svoju <span className="font-semibold">ljubav prema automobilima</span>, naučiti nešto novo i steći prijatelje koji dijele iste interese.
                </p>
              </div>
            </div>

            
            <div className="mb-5">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full px-4 py-2 text-left bg-red-500 text-white rounded-md focus:outline-none transition-transform transform hover:scale-105"
              >
                Šta je kreativni volan?
              </button>
              <div className={`${activeIndex === 1 ? "block" : "hidden"} mt-2 px-4 py-2 bg-gray-100 rounded-md transition-all duration-500 ease-in-out transform ${activeIndex === 1 ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'}`}>
                <p className="text-red-600">
                  Kreativni volan je naš projekat koji se fokusira na povezivanje kreativnih ljudi kroz ljubav prema automobilima. Organizujemo različite radionice i događaje gde članovi mogu pokazati svoje veštine i kreativnost.
                </p>
              </div>
            </div>

            
            <div className="mb-5">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full px-4 py-2 text-left bg-red-500 text-white rounded-md focus:outline-none transition-transform transform hover:scale-105"
              >
                Šta je naš cilj?
              </button>
              <div className={`${activeIndex === 2 ? "block" : "hidden"} mt-2 px-4 py-2 bg-gray-100 rounded-md transition-all duration-500 ease-in-out transform ${activeIndex === 2 ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'}`}>
                <p className="text-red-600">
                  Naš cilj je povezati ljude kroz zajedničku strast prema automobilima. Organizujemo redovne susrete, vožnje i događaje gde naši članovi mogu pokazati svoje automobile, razmijeniti iskustva i ideje, te uživati u prijateljskoj atmosferi.
                </p>
              </div>
            </div>
            
            <div className="mb-5">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full px-4 py-2 text-left bg-red-500 text-white rounded-md focus:outline-none transition-transform transform hover:scale-105"
              >
                Da li je besplatno?
              </button>
              <div className={`${activeIndex === 3 ? "block" : "hidden"} mt-2 px-4 py-2 bg-gray-100 rounded-md transition-all duration-500 ease-in-out transform ${activeIndex === 3 ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'}`}>
                <p className="text-red-600">
                  Da, učlanjenje i prisustvo većini naših događaja su potpuno besplatni. Cilj nam je da zajednica bude dostupna svima koji dele našu strast prema automobilima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
