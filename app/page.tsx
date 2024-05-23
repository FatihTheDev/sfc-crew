'use client'

import { useState, useEffect } from "react";
import "./App.css";
import "./assets/A9Bg.gif"

export default function Home() {

  const[showMore, setShowMore] = useState(false);
  const[animate, setAnimate] = useState(false);

  const show = () => {
    setAnimate(true);
    setShowMore(!showMore);
  }

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 1510);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <>
      <div className="background-gif">
        <article>
          <h1 className="text-3xl text-red-500 font-bold mt-10 mb-12 text-center underline md:text-4xl">Ko smo mi?</h1>
          <p className="mx-[3%] mb-5 text-xl text-red-600 text-center md:text-2xl"><span className="font-semibold">Street Fleet Crew</span> je <span className="font-semibold">zajednica strastvenih ljubitelja automobila</span> koja okuplja entuzijaste svih generacija.</p>
          <p className="mx-[3%] text-xl text-red-600 text-center md:text-2xl">Naš cilj je stvaranje prostora gdje svaki član može podijeliti svoju <span className="font-semibold">ljubav prema automobilima</span>, naučiti nešto novo i steći prijatelje koji dijele iste interese.</p>
          <div className="flex justify-center items-center mt-10">
            <button onClick={show} type="button" className={showMore ? "hidden" : "px-3 py-2 bg-red-500 text-white rounded-full border-4 border-red-600 hover:bg-red-600 hover:border-red-500 hover:scale-90"}>Zanima Vas više?</button>
          </div>
        </article>

        <article className={`${animate ? "animate-bounce" : ""} ${showMore ? "visible" : "hidden"}`}>
          <h1 className="text-3xl text-red-500 font-bold mt-10 mb-12 text-center underline md:text-4xl">Naša Misija</h1>
          <p className="mx-[4%] mb-5 text-xl text-red-600 text-center md:text-2xl">Naša misija je povezati ljude kroz zajedničku strast prema automobilima.</p>
          <p className="mx-[4%] text-xl text-red-600 text-center md:text-2xl"> Organizujemo redovne <span className="font-semibold">susrete</span>, <span className="font-semibold">vožnje</span> i <span className="font-semibold">događaje</span>, gdje naši članovi mogu pokazati svoje automobile, razmijeniti iskustva i ideje, te uživati u prijateljskoj atmosferi.</p>

          <h1 className="text-3xl text-red-500 font-bold mt-10 mb-12 text-center underline md:text-4xl">Naše vrijednosti:</h1>
          <ul>
            <hr className="border-1 border-red-400"/>
            <li><p className="mx-[4%] mb-5 text-xl text-red-600 text-center md:text-2xl"><span className="font-bold">Strast</span>: Ljubav prema automobilima je ono što nas povezuje i motiviše</p></li>
            <hr className="border-1 border-red-400"/>
            <li><p className="mx-[4%] mb-5 text-xl text-red-600 text-center md:text-2xl"><span className="font-bold">Zajedništvo</span>: Njegujemo prijateljstva i međusobnu podršku unutar zajednice</p></li>
            <hr className="border-1 border-red-400"/>
            <li><p className="mx-[4%] mb-5 text-xl text-red-600 text-center md:text-2xl"><span className="font-bold">Edukacija</span>:  Potičemo razmjenu znanja i iskustava o automobilima</p></li>
            <hr className="border-1 border-red-400"/>
          </ul>
        </article>
        </div>
  </>
  );
}
