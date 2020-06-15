import React from 'react'
import style from './City.module.css'
import Cell from './Cell/Cell.jsx'

const City = (props) => {
    let stylesheet = {};
    if(!props.main){
        stylesheet = {
            // position: 'relative',
            // paddingTop: '100%', /* 1:1 Aspect Ratio */
            width: '100px',
            height: '100px',
        }
    }
    return (
        <div className={ style.City } style = {stylesheet} onClick={() => {props.click(props.index)}}>

            {(props.cityGrid || []).map((row, rowindexcell) => (
                row.map((cellValue, columnindexcell) => (
                    <Cell 
                        key={rowindexcell+','+columnindexcell}
                        rowindexcell={rowindexcell} 
                        columnindexcell={columnindexcell} 
                        cellValue={cellValue}
                        toggleCell={props.toggleCell}
                        main={props.main}>
                    </Cell>
                ))
            ))}
        </div>
    )
}

export default City
