import React from "react"
import "./arrowbtn.scss"
import arrow from "../../assets/images/arrow.svg"
export const Arrowbtn = (props) =>{

    return (
        <div className="arrowbtn" onClick={() => props.onClick()}>
            <p className="arrowbtn__text">{props.title}</p>
            <img src={arrow} alt="arroow svg"/>
        </div>
    )
}