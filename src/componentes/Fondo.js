import React, { useState } from 'react';
import fondo from '../assets/Vectors.png'
import dark from '../assets/Dark Mode.png'

const Fondo = () => {

    const [themeStatus, setThemeStatus] = useState("ligth")

    const cambiarThema = () => {

        let body = document.body
        if (body.className === "" || body.className === "ligth") {
            body.className = "dark"
            return setThemeStatus("dark")
        }
        setThemeStatus("ligth")
        body.className = "ligth"
    }

    return (

        <div className='fondo'>

            <img src={fondo} />

            <div className='modoDark'>
                <img className={`theme-${themeStatus}`} src={dark} onClick={cambiarThema} />


            </div>

        </div>
    );
}

export default Fondo;