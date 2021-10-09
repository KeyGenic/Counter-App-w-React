import React from 'react';
import './left-btn-styles.css'

export const LeftBtn = ({props}) => {
    return(
        <i class="fas fa-chevron-left left" onClick = {props}></i>
    )
}