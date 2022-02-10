import React from "react"
import { Popup } from "../../components/popup/popup"
import { useSelector} from 'react-redux'
import { Arrowbtn } from "../../components/buttons/arrowbtn"
import { useHistory } from 'react-router-dom';
import { open,close } from "../../appRedux/slices/popup/popup"
import { setArtwork, setFrame, setFramePrice, setArtPrice } from "../../appRedux/slices/image/image"
import {useDispatch } from "react-redux"
import { Arts, Frames } from "../../data"
import {FormattedMessage} from "react-intl";
import "./artworks.scss"

export const Artworks = () => {

    const popup = useSelector((state) => state.popup)
    const image = useSelector((state) => state.image)
    const dispatch = useDispatch()
    const history = useHistory();

    var navigate = () => {
        history.push('/preview')
        dispatch(close())
    }

    var openPopup = (value,amount) => {
        dispatch(setArtPrice(0))
        dispatch(setArtwork(value))
        dispatch(setArtPrice(amount))
        dispatch(open())
    }

    var changeFrame = (value, amount)=> {
        dispatch(setFramePrice(0))
        dispatch(setFrame(value))
        dispatch(setFramePrice(amount))
    }

    return (
        <div className="artworks">
            {   popup.value && <Popup

                >
                    <Popupcontent 
                        artwork={image.artwork.value} 
                        frame = {image.frame.value}
                        onClick ={changeFrame}
                        navigate={navigate}
                    />
                </Popup>
            }
            <div className="artworks-inner">
                <div className="artworks-inner__top">
                    <p>
                        <FormattedMessage
                            id = "artwork.title"
                        />
                    </p>
                    <p>
                        <FormattedMessage
                            id = "artwork.body"
                        />
                    </p>
                </div>
                <div className="artworks-inner__bottom">
                       {
                           (Arts ?? []).map ((item,index)=> (
                               <Singleproduct
                                    key={index}
                                    onClick={openPopup }
                                    name={item.name}
                                    price={item.price}
                                    image = {item.image}
                               />
                           ))
                       }
                </div>

            </div>

        </div>
    )
}

const Singleproduct = (props) => {

    return (
        <div className={`singleproduct ${props.isFrame ? ' _frame' : ''}`} onClick={()=> props.onClick(props.image, props.price)}>
            <img src={props.image} alt="artwork pic" className={`${props.image === props.selectedFrame ? 'active':''}`}/>
            <div className="content">
                {!props.isFrame && <p> 
                    <FormattedMessage
                        id = "artwork.product.name"
                        values = {{name: props.name}}
                    />
                    </p>}
                <p>${parseFloat(props.price).toFixed(2)}</p>
            </div>

        </div>
    )
}

const Popupcontent = (props) => {
    

    return (
        <div className="popupcontent">
            <div className="popupcontent__images">
               {props.frame && <img src={props.frame} alt="selected frame"/>}
                <img src={props.artwork} alt="selected artwork"/>
            </div>
            
            <div className="popupcontent__frames">
                <p>Select Frames</p>

                <div className="popupcontent__frames__content">
                    <div className={`no-frame ${props.frame === '' ? 'active' :''}`} onClick={() => props.onClick('')}>
                        No Frame
                    </div>
                    {
                        (Frames??[]).map((item,index)=> (
                            <Singleproduct
                                key={index}
                                isFrame={true}
                                price={item.price}
                                image={item.image}
                                onClick={props.onClick}
                                selectedFrame ={props.frame}
                            />
                        ))
                    }

                </div>
            </div>
            <Arrowbtn
                title = "Preview on A T-Shirt"
                onClick={()=>props.navigate()}
            />
        </div>
    )
}