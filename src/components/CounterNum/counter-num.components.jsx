import React from 'react';
import './counter-num.styles.css'

export const Counter = ({rightBtn,leftBtn,counter}) => {
    return(
        <div className = "container">
            {leftBtn}
            {rightBtn}
            <h5>{counter}</h5>
        </div>
    )
}