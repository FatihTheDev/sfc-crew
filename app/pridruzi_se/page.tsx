'use client'

import { useState } from 'react'

const Join = () => {

    const [info, setInfo] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        hasCar: '',
        car: '',
        bio: ''
    });

    function handleChange(e: any) {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const formValid = () => {
        if (info.hasCar === 'Da') {
            return info.firstname.length >= 2 && info.lastname.length >= 2 && info.email.length >= 5 && info.phone.length >= 6 && info.car.length >= 2 && info.bio.length >= 20;
        } else {
            return info.firstname.length >= 2 && info.lastname.length >= 2 && info.email.length >= 5 && info.phone.length >= 6 && info.bio.length >= 20;
        }
    }

    return (
        <>
        <div className="relative bg-gradient-to-l from-red-100 to-red-300 min-h-screen pb-2">
        <h1 className="text-2xl text-red-500 font-bold pt-6 mt-0 mb-9 text-center md:text-4xl">Pridruži se i postani dio ekipe!</h1>

            <form method="POST">
                <div className="wrapper mt-5 text-center mb-4">
                    <div className="names flex flex-col md:flex-row justify-center items-center mb-12 border-2 border-red-200 py-4">
                        <div className="flex flex-col items-center md:items-start md:flex-row">
                            <div className="flex flex-col items-center md:items-start">
                                <label className='text-red-700' htmlFor="firstname">Unesi ime:</label>
                                <input value={info.firstname} onChange={handleChange} className="rounded-full ml-2 mr-5 mb-2 md:mb-0 border-2 border-red-600 text-center hover:placeholder:brightness-50" name="firstname" type="text" placeholder="Unesi ime..." required/>
                                {(info.firstname.length < 2 && info.firstname.length > 0) ? <p className='text-red-700 my-2 md:my-0'>Ime mora imati najmanje 2 karaktera!</p> : null}
                            </div>

                            <div className="flex flex-col items-center md:items-start">
                                <label className='text-red-700' htmlFor="lastname">Unesi prezime:</label>
                                <input value={info.lastname} onChange={handleChange} className="rounded-full ml-2 mr-5 mb-2 md:mb-0 border-2 border-red-600 text-center hover:placeholder:brightness-50" name="lastname" type="text" placeholder="Unesi prezime..." required/>
                                {(info.lastname.length < 2 && info.lastname.length > 0) ? <p className='text-red-700 my-2 md:my-0'>Prezime mora imati najmanje 2 karaktera!</p> : null}
                            </div>
                        </div>
                    </div>

                    <div className="email flex flex-col justify-center mb-12 border-2 border-red-200 py-4 md:flex-row items-center md:items-start">
                        <label className='text-red-700' htmlFor="email">Unesi svoj email:</label>
                        <div className="flex flex-col items-center md:items-start">
                            <input value={info.email} onChange={handleChange} className="rounded-full ml-2 mr-5 mb-2 px-3 md:mb-0 border-2 border-red-400 text-center hover:placeholder:brightness-50" name="email" type="email" placeholder="Unesi email..." required/>
                            {(info.email.length < 5 && info.email.length > 0) ? <p className='text-red-700'>E-mail mora imati najmanje 5 karaktera!</p> : null}
                        </div>
                    </div>

                    <div className="phone flex flex-col justify-center mb-12 border-2 border-red-200 py-4 md:flex-row items-center md:items-start">
                        <label className='text-red-700' htmlFor="phone">Unesi broj telefona:</label>
                        <div className="flex flex-col items-center md:items-start">
                            <input value={info.phone} onChange={handleChange} className="rounded-full ml-2 mr-5 mb-2 px-3 md:mb-0 border-2 border-red-400 text-center hover:placeholder:brightness-50" name="phone" type="tel" placeholder="Unesi broj telefona..." required/>
                            {(info.phone.length < 6 && info.phone.length > 0) ? <p className='text-red-700'>Broj telefona mora imati najmanje 6 karaktera!</p> : null}
                        </div>
                    </div>

                    <div className="hasCar flex flex-col justify-center mb-12 border-2 border-red-200 py-4 md:flex-row items-center md:items-start">
                        <label className='text-red-700 mb-2 md:mb-0'>Da li posjedujete automobil? &nbsp;</label>
                        <div className="flex flex-row items-center justify-center md:justify-start">
                            <div className="mr-5">
                                <label className="text-red-700">
                                    <input type="radio" name="hasCar" value="Da" checked={info.hasCar === 'Da'} onChange={handleChange} className="mr-2"/>
                                    Da
                                </label>
                            </div>
                            <div>
                                <label className="text-red-700">
                                    <input type="radio" name="hasCar" value="Ne" checked={info.hasCar === 'Ne'} onChange={handleChange} className="mr-2"/>
                                    Ne
                                </label>
                            </div>
                        </div>
                    </div>

                    {info.hasCar === 'Da' && (
                        <div className="car flex flex-col justify-center mb-12 border-2 border-red-200 py-4 md:flex-row items-center md:items-start">
                            <label className='text-red-700' htmlFor="car">Koji automobil vozite?</label>
                            <div className="flex flex-col items-center md:items-start">
                                <input value={info.car} onChange={handleChange} className="rounded-full ml-2 mr-5 mb-2 px-3 md:mb-0 border-2 border-red-400 text-center hover:placeholder:brightness-50" name="car" type="text" placeholder="Unesi automobil..." required={info.hasCar === 'Da'}/>
                                {(info.car.length < 2 && info.car.length > 0) ? <p className='text-red-700'>Naziv automobila mora imati najmanje 2 karaktera!</p> : null}
                            </div>
                        </div>
                    )}

                    <div className="bio flex flex-col justify-center mb-12 border-2 border-red-200 py-4 md:flex-row items-center md:items-start">
                        <label className='text-red-700' htmlFor="bio">Napiši nešto o sebi:</label>
                        <div className="flex flex-col items-center md:items-start">
                            <textarea value={info.bio} onChange={handleChange} className="rounded-lg w-50 h-60 md:w-60 md:h-30 ml-2 mr-5 mb-2 px-3 md:mb-0 border-2 border-red-600 text-center hover:placeholder:brightness-50 resize-none" name="bio" placeholder="Zbog čega ste zainteresovani za SFC?..." required/>
                            {(info.bio.length < 20 && info.bio.length > 0) ? <p className='text-red-700'>Biografija mora imati preko 20 karaktera!</p> : null}
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <button type='submit' className='bg-red-500 text-white rounded-full px-6 py-2 hover:bg-red-700 disabled:bg-red-500 disabled:hover:cursor-not-allowed' disabled={!formValid()}>Pridruži se</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default Join;
