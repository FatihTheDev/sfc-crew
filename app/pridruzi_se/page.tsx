'use client'

import { useState } from 'react'

const Join = () => {

    const[info, setInfo] = useState({
        firstname: '',
        lastname: '',
        email: '',
        bio: '',
        password: '',
        passagain: ''
    });

    function handleChange(e:any) {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const formValid = () => {
        return info.firstname.length >= 2 && info.lastname.length >= 2 && info.email.length >= 5 && info.bio.length >=20 && info.password.length >= 8 && info.passagain.length >= 8 && info.password === info.passagain; 
    }

    return (
        <>
            <h1 className="text-2xl text-red-500 font-bold my-9 text-center md:text-4xl">Pridruži se i postani dio ekipe!</h1>
            <form method="POST">
                <div className="wrapper mt-5 text-center">
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
                            <input value={info.email} onChange={handleChange} className="rounded-full ml-2 mr-5 mb-2 px-3 md:mb-0 border-2 border-red-600 text-center hover:placeholder:brightness-50" name="email" type="email" placeholder="Unesi email..." required/>
                            {(info.email.length < 5 && info.email.length > 0) ? <p className='text-red-700'>E-mail mora imati najmanje 5 karaktera!</p> : null}
                        </div>
                    </div>

                    <div className="bio flex flex-col justify-center mb-12 border-2 border-red-200 py-4 md:flex-row items-center md:items-start">
                        <label className='text-red-700' htmlFor="email">Napiši nešto o sebi:</label>
                        <div className="flex flex-col items-center md:items-start">
                            <textarea value={info.bio} onChange={handleChange} className="rounded-lg w-50 h-60 md:w-60 md:h-30 ml-2 mr-5 mb-2 px-3 md:mb-0 border-2 border-red-600 text-center hover:placeholder:brightness-50 resize-none" name="bio" placeholder="Zbog čega ste zainteresovani za SFC?..." required/>
                            {(info.bio.length < 20 && info.bio.length > 0) ? <p className='text-red-700'>Biografija mora imati preko 20 karaktera!</p> : null}
                        </div>
                    </div>

                    <div className="passwords flex flex-col md:flex-row justify-center items-center mb-5 border-2 border-red-200 py-4 w-full">
                        <div className="flex flex-col items-center md:items-start md:flex-row">
                            <div className="flex flex-col items-center md:items-start">
                                <label className='text-red-700' htmlFor="password">Unesi lozinku:</label>
                                <input value={info.password} onChange={handleChange} className="rounded-full ml-2 mr-5 mb-2 md:mb-0 border-2 border-red-600 text-center hover:placeholder:brightness-50" name="password" type="password" placeholder="Unesi lozinku..." required/>
                                {(info.password.length < 8 && info.password.length > 0) ? <p className='text-red-600 my-2 md:my-0'>Lozinka mora imati najmanje 8 karaktera!</p> : null}
                            </div>

                            <div className="flex flex-col items-center md:items-start">
                                <label className='text-red-700' htmlFor="passagain">Unesi lozinku ponovo:</label>
                                <input value={info.passagain} onChange={handleChange} className="rounded-full ml-2 mr-5 mb-2 md:mb-0 border-2 border-red-600 text-center hover:placeholder:brightness-50" name="passagain" type="password" placeholder="Unesi lozinku ponovo..." required/>
                                {(info.password !== "" && info.passagain !== "" && info.password !== info.passagain) ? <p className='text-red-500'>Lozinke se ne poklapaju!</p>
                                : (info.password !== "" && info.passagain !== "" && info.password === info.passagain) ? <p className='text-green-500'>Lozinke se poklapaju!</p> : null}
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-center items-center">
                        <button type='submit' className='bg-red-500 text-white rounded-full px-6 py-2 hover:bg-red-700 disabled:bg-red-500 disabled:hover:cursor-not-allowed' disabled={!formValid()}>Pridruži se</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Join;
