import React, { useState } from 'react';
import './Main.css'

const YolDerece = (props) => {

    const [hereketShidStr, setHereketShidStr] = useState("")
    const [herShidArtStr, setHerShidArtStr] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Hereket shid ${hereketShidStr.split(' ')}`)
        console.log(`Hereket shid art ${herShidArtStr}`)
    }

    return (
        <div className='container'>
                <title>Diplom Layihəsi</title>
                <header>
                <h1>Yolun dərəcəsinin təyini</h1>
                </header>

                <div className="formContainer">
                    <form onSubmit={handleSubmit}>
                        <label>
                        Hərəkət şiddətini arasında boşluq olmaqla qeyd edin: (a b c ...)
                            <input type="text" value={hereketShidStr} onChange={(e) => setHereketShidStr(e.target.value)}/>
                        </label>

                        <label>
                        Hərəkət şiddətinin illik artımını q(%) qeyd edin:
                            <input type="text" value={herShidArtStr} onChange={(e) => setHerShidArtStr(e.target.value)}/>
                        </label>

                        <input type="submit" value="Submit" />
                    </form>
                </div>


                <div className='mainButtons'>
                    <button className='button-65' onClick={() => props.onClick()}>Əvvələ</button>
                </div>
            </div>
    )
}

export {YolDerece}