import React, { useState } from 'react';
import "./Main.css"

const kecidEyriCedveli = {
    30:{
        "l" : 30,
        "2beta":  57.3,
        "m": 14.86,
        "ro": 1.24
    },
        50: {
        "l": 35,
        "2beta": 40.08,
        "m": 17.43,
        "ro": 1.02,
    },
        60: {
        "l": 40,
        "2beta": 38.2,
        "m": 19.93,
        "ro": 1.11
    },
        80: {
        "l": 45,
        "2beta": 40.08,
        "m": 22.45,
        "ro": 1.07
    },
        100: {
        "l": 50,
        "2beta": 28.65,
        "m": 24.95,
        "ro": 1.08
    },
        150:  {
        "l": 60,
        "2beta": 22.92,
        "m": 29.96,
        "ro": 1.01
    },
    
        200: {
        "l": 70,
        "2beta": 20.05,
        "m": 34.97,
        "ro": 1.02
    },
        250:
    {
        "l": 80,
        "2beta": 18.4,
        "m": 39.97,
        "ro": 1.07
    },
        300:
    {
        "l": 90,
        "2beta": 17.18,
        "m": 44.97,
        "ro": 1.12
    },
        400:
    {
        "l": 100,
        "2beta": 14.32,
        "m": 49.97,
        "ro": 1.04
    },
        500:
    {
        "l": 110,
        "2beta": 12.6,
        "m": 54.98,
        "ro": 1.01
    },
        600:
    {
        "l": 120,
        "2beta": 11.47,
        "m": 59.98,
        "ro": 1.00
    },
        700:
    {
        "l": 120,
        "2beta": 9.84,
        "m": 59.98,
        "ro": 0.85
    },
        800:
    {
        "l": 120,
        "2beta": 8.6,
        "m": 59.99,
        "ro": 0.75
    },

        900:
    {
        "l": 120,
        "2beta": 7.64,
        "m": 59.99,
        "ro": 0.66
    },

        1000:
    {
        "l": 120,
        "2beta": 6.87,
        "m": 59.99,
        "ro": 0.60
    },

        1100:
    {
        "l": 100,
        "2beta": 5.2,
        "m": 50.00,
        "ro": 0.38
    },

        1200:
    {
        "l": 100,
        "2beta": 4.77,
        "m": 50.00,
        "ro": 0.35
    },

        1300:
    {
        "l": 100,
        "2beta": 4.4,
        "m": 50.00,
        "ro": 0.32
    },

        1400:
    {
        "l": 100,
        "2beta": 4.1,
        "m": 50.00,
        "ro": 0.30
    },

        1500:
    {
        "l": 100,
        "2beta": 3.82,
        "m": 50.00,
        "ro": 0.28
    },

        1600:
    {
        "l": 100,
        "2beta": 3.58,
        "m": 50.00,
        "ro": 0.26
    },

        1700:
    {
        "l": 100,
        "2beta": 3.37,
        "m": 50.00,
        "ro": 0.25
    },

        1800:
    {
        "l": 100,
        "2beta": 3.18,
        "m": 50.00,
        "ro": 0.24
    },

        1900:
    {
        "l": 100,
        "2beta": 3.02,
        "m": 50.00,
        "ro": 0.22
    },

        2000:
    {
        "l": 100,
        "2beta": 2.87,
        "m": 50.00,
        "ro": 0.21
    },
}

const EyriHesab = (props) => {

    const [alfa, setAlfa] = useState("")
    const [radius, setRadius] = useState("")
    const [dbz, setDBZ] = useState("")
    const [tangens, setTangens] = useState("T = R x tan \u03b1/2 = ")
    const [eyri, setEyri] = useState("Ə = (π x R x \u03b1) / 180 = ")
    const [bisektris, setBisektris] = useState("B = R  x (1 / cos(\u03b1/ 2) - 1) = ")
    const [domer, setDomer] = useState("D = 2T - Ə = ")
    const [eyriSonu, setEyriSonu] = useState("ƏS = ƏB + Ə = ")
    const [eyriBash, setEyriBash] = useState("ƏB = DBZ - T = ")

    const [tangensNum, setTangensNum] = useState("0.00")
    const [eyriNum, setEyriNum] = useState("0.00")
    const [bisektrisNum, setBisektrisNum] = useState("0.00")
    const [domerNum, setDomerNum] = useState("0.00")
    const [eyriSonuNum, setEyriSonuNum] = useState("0.00")
    const [eyriBashNum, setEyriBashNum] = useState("0.00")

    const [isDisabled, setIsDisabled] = useState(true)

    const Temizle = () => {
        setAlfa("")
        setRadius("")
        setDBZ("")
        setTangens("T = R x tan \u03b1/2 = ")
        setEyri("Ə = (π x R x \u03b1) / 180 = ")
        setBisektris("B = R  x (1 / cos(\u03b1/ 2) - 1) = ")
        setDomer("D = 2T - Ə = ")
        setEyriSonu("ƏS = ƏB + Ə = ")
        setEyriBash("ƏB = DBZ - T = ")

        setTangensNum("0.00")
        setEyriNum("0.00")
        setBisektrisNum("0.00")
        setDomerNum("0.00")
        setEyriSonuNum("0.00")
        setEyriBashNum("0.00")

        setIsDisabled(true)
    }

    const Radians = (angle) => {
        return (Math.PI / 180) * angle;
    }

    const SadeEyriHesab = (alfa, eRadius, DBZ) => {
        const eyriAlfaVerilen = Number(alfa)
        const eyriRadiusVerilen = Number(eRadius)
        const eyriDBZVerilen = Number(DBZ)

        if(isNaN(eyriAlfaVerilen) || isNaN(eyriRadiusVerilen) || isNaN(eyriDBZVerilen)){
            alert("Məlumatları düzgün daxil edin!");
            Temizle();
        }

        const eyriTangens = eyriRadiusVerilen * Math.tan(Radians(eyriAlfaVerilen / 2));
        const eyriUzunluq = (Math.PI * eyriRadiusVerilen * eyriAlfaVerilen) / 180;
        const eyriBisektris = eyriRadiusVerilen * ((1 / Math.cos(Radians(eyriAlfaVerilen / 2))) - 1);
        const eyriDomer = 2 * eyriTangens - eyriUzunluq;
        const eyriBashlangic = eyriDBZVerilen - eyriTangens;
        const eyriSonu = eyriBashlangic + eyriUzunluq;

        setTangensNum(eyriTangens.toFixed(2))
        setEyriNum(eyriUzunluq.toFixed(2))
        setBisektrisNum(eyriBisektris.toFixed(2))
        setDomerNum(eyriDomer.toFixed(2))
        setEyriBashNum(eyriBashlangic.toFixed(2))
        setEyriSonuNum(eyriSonu.toFixed(2))

        setIsDisabled(false)
    }


    const VirajliEyriHesab = (alfa, eRadius, DBZ) => {
        const eyriAlfaVerilen = Number(alfa)
        const eyriRadiusVerilen = Number(eRadius)
        const eyriDBZVerilen = Number(DBZ)

        if(isNaN(eyriAlfaVerilen) || isNaN(eyriRadiusVerilen) || isNaN(eyriDBZVerilen)){
            alert("Məlumatları düzgün daxil edin!");
            Temizle();
        }
        else{
            if(eyriRadiusVerilen in kecidEyriCedveli){

                const ro = kecidEyriCedveli[eyriRadiusVerilen]["ro"]
                const m = kecidEyriCedveli[eyriRadiusVerilen]["m"]
                const l = kecidEyriCedveli[eyriRadiusVerilen]["l"]
                const ikiBeta = kecidEyriCedveli[eyriRadiusVerilen]["2beta"]

                const eyriTangens = ((eyriRadiusVerilen + ro) * Math.tan(Radians(eyriAlfaVerilen / 2))) + m;
                const eyriUzunluq = (Math.PI * eyriRadiusVerilen * (eyriAlfaVerilen - ikiBeta)) / 180 + l*2;
                const eyriBisektris = ((eyriRadiusVerilen + ro) * (1 / Math.cos(Radians(eyriAlfaVerilen / 2)))) - eyriRadiusVerilen;
                const eyriDomer = 2 * eyriTangens - eyriUzunluq;
                const eyriBashlangic = eyriDBZVerilen - eyriTangens;
                const eyriSonu = eyriBashlangic + eyriUzunluq;

                setTangensNum(eyriTangens.toFixed(2))
                setEyriNum(eyriUzunluq.toFixed(2))
                setBisektrisNum(eyriBisektris.toFixed(2))
                setDomerNum(eyriDomer.toFixed(2))
                setEyriBashNum(eyriBashlangic.toFixed(2))
                setEyriSonuNum(eyriSonu.toFixed(2))

                setTangens("T = (R + \u03c1) x tan \u03b1/2 + m = ")
                setEyri("Ə = (π x R x (\u03b1 - 2β)) / 180 + 2L = ")
                setBisektris("B = (R + \u03c1) x (1 / cos(\u03b1/ 2) - R = ")
                setEyriBash("KƏB = DBZ - T = ")
                setEyriSonu("KƏS = KƏB + Ə = ")

                setIsDisabled(false)
    
            }
            else{
                alert("Məlumatları düzgün daxil edin!");
                Temizle();
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        try{
            const eyriAlfaVerilen = Number(alfa)
            const eyriRadiusVerilen = Number(radius)
            const eyriDBZVerilen = Number(dbz)

            if(isNaN(eyriAlfaVerilen) || isNaN(eyriRadiusVerilen) || isNaN(eyriDBZVerilen)){
                alert("Məlumatları düzgün daxil edin!");
                Temizle();
            }
            else{
                if (eyriRadiusVerilen > 2000)
                {
                    SadeEyriHesab(eyriAlfaVerilen, eyriRadiusVerilen, eyriDBZVerilen);
                }
                else if (eyriRadiusVerilen > 0 && eyriRadiusVerilen <= 2000)
                {
                    VirajliEyriHesab(eyriAlfaVerilen, eyriRadiusVerilen, eyriDBZVerilen);
                }
                else
                {
                    alert("Məlumatları düzgün daxil edin!");
                    Temizle();
                }
            }
        }
        catch{
            alert("Məlumatları düzgün daxil edin!")   
            Temizle();
        }
    }
    return (
        <div className='container'>
                <title>Diplom Layihəsi</title>
                <header>
                <h1>Əyri hesabatı</h1>
                </header>

                <div className='mainCont'>
                    <p style={{textAlign: "center"}}>Əyri elementlərinin hesablanması: </p>
                    <form className="formContainerE" onSubmit={handleSubmit}>
                        <label>
                        {"\u03b1"}:
                            <input className='formInput' type="text" value={alfa} onChange={(e) => setAlfa(e.target.value)}/>
                        </label>

                        <label>
                        Radius(metrlə):
                            <input className='formInput' type="text" value={radius} onChange={(e) => setRadius(e.target.value)}/>
                        </label>

                        <label>
                        DBZ(xxxx.xx formatında):
                            <input className='formInput' type="text" value={dbz} onChange={(e) => setDBZ(e.target.value)}/>
                        </label>

                        <input style={{alignSelf:'center'}} type="submit" value="Hesabla" className='button-65' />
                    </form>

                    <label>
                        {tangens}
                        <span><p className='mainPar' style={isDisabled?{backgroundColor: '#858585'} : {backgroundColor: 'white'}}>{tangensNum}</p>
</span>                    </label>
                    <label>
                        {eyri}
                        <span><p className='mainPar' style={isDisabled?{backgroundColor: '#858585'} : {backgroundColor: 'white'}}>{eyriNum}</p>
   </span>                 </label>
                    <label>
                        {bisektris}
                        <span><p className='mainPar' style={isDisabled?{backgroundColor: '#858585'} : {backgroundColor: 'white'}}>{bisektrisNum}</p></span>
                    </label>
                    <label>
                        {domer}
                        <span><p className='mainPar' style={isDisabled?{backgroundColor: '#858585'} : {backgroundColor: 'white'}}>{domerNum}</p>
  </span>                  </label>
                    <label>
                        {eyriBash}
                        <span><p className='mainPar' style={isDisabled?{backgroundColor: '#858585'} : {backgroundColor: 'white'}}>{eyriBashNum}</p></span>
                    </label>
                    <label>
                        {eyriSonu}
                        <span><p className='mainPar' style={isDisabled?{backgroundColor: '#858585'} : {backgroundColor: 'white'}}>{eyriSonuNum}</p></span>
                    </label>
                </div>

                <div className='mainButtons'>
                    <button className='button-65' onClick={() => Temizle()}>Təmizlə</button>
                    <button className='button-65' onClick={() => props.onClick()}>Əvvələ</button>
                </div>
            </div>
    )
}

export {EyriHesab}

