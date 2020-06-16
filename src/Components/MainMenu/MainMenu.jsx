import React from 'react'
import style from './MainMenu.module.css'
import logo from '../../Images/logo.png';

const MainMenu = (props) => {
    return (
        <div className={ style.MainMenu }>
            <div className={style.App_header}>

            <p>Snack Wars</p>
            <img src={logo} className={style.App_logo} onClick={props.click} alt="logo" />
            <p>Click the logo to begin</p>

            </div>
        </div>
    )
}

export default MainMenu
