import React from "react"
import "./success.scss"
import tee from "../../assets/images/tshirt.png"
import {useSelector} from "react-redux"
import ConfettiExplosion from "@reonomy/react-confetti-explosion"
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react"
import { Arrowbtn } from "../../components/buttons/arrowbtn";
import {FormattedMessage} from "react-intl";
export const Success =() => {
    const image = useSelector((state) => state.image)
    const order = useSelector((state) => state.order)
    // eslint-disable-next-line
    const [isExploding, setIsExploding] = useState(true);
    const history = useHistory();

    var goTohome = () => {
        history.push("/artworks")
    }
    useEffect(()=> {
        if (!image.artwork.value){
            history.push("/artworks")
        }
    })
    return (
        <div className="success">  
            
            <div className="success__inner">
                <div className="conffeti">{isExploding && <ConfettiExplosion floorWidth= {350} />} </div>
                <div className="success__inner__top">
                    {image.frame.value && <img src={image.frame.value} className="success__inner__top__frame" alt="frame"/>}
                    {image.artwork.value && <img src={image.artwork.value} className="success__inner__top__artwork" alt="artwork"/>}
                    <img className={`success__inner__top__tee -${order.color}`} src={tee} alt="tee"/>
                </div>
                <div className="success__inner__bottom">
                    <p>
                        <FormattedMessage
                            id = "success.title"
                        />
                    </p>
                        <p>
                        <FormattedMessage
                            id = "success.body"
                        />
                        </p>
                </div>
                <Arrowbtn
                    title="Continue Shopping"
                    onClick={goTohome}
                />
                
            </div>
            
        </div>
    )
}