import React from 'react'
import style from './Cell.module.css'

const Cell = (props) => {
    
    let cellStyle = style.Empty;
    let onclick = null;

    if(props.main){
        onclick = () => {props.toggleCell(props.rowindexcell,props.columnindexcell)};

        if(props.cellValue){
            cellStyle = style.Occupied_main;
        }else{
            cellStyle = style.Empty_main;
        }
    }else if(props.cellValue){
        cellStyle = style.Occupied;
    }

    return (
        <div className={ cellStyle } onClick={  onclick }>
            
        </div>
    )
}

export default Cell
