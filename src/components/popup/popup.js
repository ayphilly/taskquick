import React from "react"
import "./popup.scss"
import closesvg from "../../assets/images/close.svg"
import { close } from "../../appRedux/slices/popup/popup"
import {useDispatch } from "react-redux"
export const Popup = (props) => {

    const dispatch = useDispatch()
    return (
        <div className="popup">
            <div className="popup__inner">
                <img src={closesvg} className="close" alt="close svg" onClick={ () => dispatch(close())}/>
                {props.children}
            </div>
        </div>
    )
}