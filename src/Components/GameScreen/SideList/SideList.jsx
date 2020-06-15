
import React from 'react'
import style from './SideList.module.css'
import City from '../City/City.jsx'

const SideList = (props) => {

    const slicedgrids = props.grids.slice(0,5);
    return (
        <div className={ style.SideList }>
            <div className={ style.display }>
                <h2>{props.title}</h2>
                <div className={style.list}>
                    {( slicedgrids || []).map((city,cityIndex) => (
                        <City key={cityIndex} cityGrid={city} main={false} index={cityIndex} click={props.click} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideList
