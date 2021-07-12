import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

function Poster() {
    const [display, setDisplay]= useState("block");
    const onClose = ()=>{
        setDisplay("none");
    }

    return (
        <div className="bigPoster" style={{display: display}}>
            <img src="./img/bigPoster.jpg" style={{width: '70%', height: '70%'}}/>
            <FontAwesomeIcon icon={faTimesCircle} className="exit" onClick={onClose}/>
        </div>
    )
}

export default Poster
