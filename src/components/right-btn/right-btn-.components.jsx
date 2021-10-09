import React from "react";
import './right-btn.styles.css';

export const RightBtn = ({props}) => {
    return(
        <i class="fas fa-chevron-right right" onClick = {props}></i>
    )
}