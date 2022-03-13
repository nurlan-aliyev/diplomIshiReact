import React, { useState } from 'react';
import './Main.css'



const YolDerece = (props) => {

    const [hereketShidStr, setHereketShidStr] = useState("")
    const [herShidArtStr, setHerShidArtStr] = useState("")
    const [sonNeticeStr, setSonNeticeStr] = useState("")
    const [nFaktikiStr, setnFaktikiStr] = useState("")
    const [nHesabiStr, setnHesabiStr] = useState("")
    const [derece, setDerece] = useState("")
    const [suret, setSuret] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const [isErrorState, setIsErrorState] = useState(false)

    const Temizle = () => {
        setIsErrorState(false)
        setIsVisible(false)
        setHerShidArtStr("")
        setHereketShidStr("")
        setSonNeticeStr("")
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const hereketShid_Int = []
        const hereketShidStrArr = hereketShidStr.split(' ')
        const hereketShidArtm_Double = (Number(herShidArtStr) / 100) + 1

        var tempStr = sonNeticeStr

        try{
            hereketShidStrArr.forEach((shd) => {
                hereketShid_Int.push(Number(shd))
                if (sonNeticeStr === "")
                    {
                        tempStr = tempStr + shd
                        setSonNeticeStr(tempStr);
                    }
                    else
                    {
                        tempStr = `${sonNeticeStr} + ${shd}`
                        setSonNeticeStr(tempStr);
                    }

            })

            const hereketShid_Sum = hereketShid_Int.reduce((partialSum, a) => partialSum + a, 0);
            const nHesabi =  hereketShid_Sum * Math.pow(hereketShidArtm_Double, 19);

            const nFaktikiStr = `Nf = ${hereketShid_Sum}`;
            const nHesabiStr = `Nh = ${hereketShid_Sum} x (1 + ${herShidArtStr}/100)^19 = ${nHesabi.toFixed(2)}`;

            setnFaktikiStr(nFaktikiStr)
            setnHesabiStr(nHesabiStr)

                if (nHesabi > 7000)
                {
                    setDerece("I")
                    setSuret("150")
                }
                else if (nHesabi < 7000 && nHesabi > 3000)
                {
                    setDerece("II")
                    setSuret("120")
                }
                else if (nHesabi < 3000 && nHesabi > 1000)
                {
                    setDerece("III")
                    setSuret("100")
                }
                else if (nHesabi < 1000 && nHesabi > 100)
                {
                    setDerece("IV")
                    setSuret("80")
                }
                else
                {
                    setDerece("V")
                    setSuret("60")
                }

                
               
            setIsVisible(true)
                 
        }
        catch{
            setIsErrorState(true)
                Temizle();
        }
    }

    return (
        <div className='container'>
                <title>Diplom Layihəsi</title>
                <header>
                <h1>Yolun dərəcəsinin təyini</h1>
                </header>

                <div>
                    <form className="formContainer" onSubmit={handleSubmit}>
                        <label>
                        Hərəkət şiddətini arasında boşluq olmaqla qeyd edin: (a b c ...)
                            <input className='formInput' type="text" value={hereketShidStr} onChange={(e) => setHereketShidStr(e.target.value)}/>
                        </label>

                        <label>
                        Hərəkət şiddətinin illik artımını q(%) qeyd edin:
                            <input className='formInput' type="text" value={herShidArtStr} onChange={(e) => setHerShidArtStr(e.target.value)}/>
                        </label>

                        <input type="submit" value="Hesabla" className='button-65' />
                    </form>
                </div>

                <div style={isVisible ? {display: 'block'} : {display:'none'}} >
                    <p>{nFaktikiStr}</p>
                    <p>{nHesabiStr}</p>
                    <p style={{fontStyle:'italic'}} >Deməli, layihələndirilən yol <b>{`${derece}`}</b> dərəcəli yoldur və əsas sürət <b>{`${suret}`}</b> km/saat qəbul edilir</p>
                </div>

                <div style={isErrorState ? {display: 'block'} : {display:'none'}} >
                    <p style={{color:"red", fontWeight:'bold'}} >Daxil etdiyiniz məlumatlar düzgün deyil!</p>
                </div>


                <div className='mainButtons'>
                    <button className='button-65' onClick={() => Temizle()}>Təmizlə</button>
                    <button className='button-65' onClick={() => props.onClick()}>Əvvələ</button>
                </div>
            </div>
    )
}

export {YolDerece}

