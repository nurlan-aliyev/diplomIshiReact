import React, { useState } from 'react';
import "./Main.css"
import { YolDerece } from './YolDerece';
import { EyriHesab } from './EyriHesab';

 const Main = () => {

    const [pageName, setPageName] = useState("Main")

    if (pageName === "Main"){
        return (
            <div className='container'>
                <title>Diplom Layihəsi</title>
                <header>
                <h1>Diplom Layihəsi hesabatı</h1>
                </header>
    
                <div className='mainButtons'>
                    <button className='button-65' onClick={() => {setPageName("YolDereceHesab")}}>Yolun dərəcəsinin təyini</button>
                    <button className='button-65' onClick={() => {setPageName("EyriHesab")}}>Əyri hesabatı</button>
                </div>
            </div>
            );
    } else if (pageName === "YolDereceHesab"){
        return(
            <YolDerece onClick={() => {setPageName("Main")}} />
        )
    }
    else {
        return (
            <EyriHesab onClick={() => {setPageName("Main")}} />
        )
    }

    
}

export {Main}