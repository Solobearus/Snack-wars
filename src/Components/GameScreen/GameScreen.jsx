import React from 'react'
import style from './GameScreen.module.css'
import City from './City/City.jsx'
import SideList from './SideList/SideList.jsx'

import Button from '../UI/Button/Button.jsx'
import logo from '../../Images/logo.png';

const GameScreen = (props) => {

    const history = [...props.gameEngine.getCityTurnHistory()];
    history.reverse();
    const premadeGrids = [...props.gameEngine.getCityPremadeGrids()];
    premadeGrids.reverse();

    return (
        <div className={style.GameScreen}>
            <div className={style.Side1}>
                <SideList grids={ history } title="History" click={props.goBackInTime}></SideList>
            </div>
            <div className={style.Container}>
                <div className={style.Title}>
                    <img src={logo} alt="logo" />
                    <h1>RAMEN WARS</h1>
                </div>
                
                <City cityGrid={props.gameEngine.getCurrentCityGrid()} toggleCell={props.toggleCell} main={true} click={()=>{}}></City>

                <div className={style.Buttons}>
                    <div className={style.group}>
                        <Button click={props.previousTurn} value="Prev turn"></Button>
                        <Button click={props.togglePlay} value={props.playStopValue}></Button>
                        <Button click={props.nextTurn} value="Next turn"></Button>
                        <Button click={props.clearCity} value="Clear city"></Button>
                        <Button click={props.toggleAllowWrapping} value={props.wrappingValue}></Button>
                        <Button click={props.randCity} value="Randomize city"></Button>
                    </div>
                </div>
            </div>
            <div className={style.Side2}>
                <SideList  grids={ premadeGrids } title="Premade" click={props.setCurrentCityGridFromPremade}></SideList>
            </div>
        </div>
    )
}

export default GameScreen
