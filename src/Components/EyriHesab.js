import "./Main.css"

const EyriHesab = (props) => {
    return (
        <div className='container'>
                <title>Diplom Layihəsi</title>
                <header>
                <h1>Əyri hesabatı</h1>
                </header>
    
                <div className='mainButtons'>
                    <button className='button-65' onClick={() => props.onClick()}>Əvvələ</button>
                </div>
            </div>
    )
}

export {EyriHesab}