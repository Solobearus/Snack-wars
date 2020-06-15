import React from 'react'
import style from './HistoryDisplay.module.css'
import City from '../City/City.jsx'

const HistoryDisplay = (props) => {

    return (
        <div className={ style.HistoryDisplay }>
            <div className={ style.display }>
                <h2>History</h2>
                <div className={style.list}>
                    {( props.history || []).map((city,cityIndex) => (
                        <City cityGrid={city} main={false} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HistoryDisplay
