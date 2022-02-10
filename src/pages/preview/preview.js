import "./preview.scss"
import {useSelector , useDispatch } from 'react-redux'
import tee from "../../assets/images/tshirt.png"
import { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { setPrice, setNumber, setSize } from "../../appRedux/slices/order/order"
export const Preview = () => {

    const [error, setError] = useState(false)
    const image = useSelector((state) => state.image)
    const order = useSelector((state) => state.order)
    const dispatch = useDispatch()
    const history = useHistory();

    var increment = () => {
        dispatch(setNumber("increment"))
    }
    var decrement = () => {
        dispatch(setNumber("decrement"))
    }

    var changeSize = (value) => {
        dispatch(setSize(value))
        setError(false)
    }

    var placeOrder = () => {

        if (order.size){

            var total = (image.artwork.artprice + image.artwork.frameprice + 100) * (order.number)
            dispatch(setPrice(total))
            history.push('/success')
        } else {
            setError(true)
        }   
       
    }

    var goBack =()=>{
        history.push('/artworks')
    }

    useEffect(()=> {
        if (!image.artwork.value){
            history.push('/artworks')
        }
    })
    return (
        <div className="preview">
            <div className="preview__inner">
                <Previewimages
                    tee ={tee}
                    frame={image.frame.value}
                    artwork={image.artwork.value}
                />
                <Description
                    frameprice = {image.frame.price}
                    artprice = {image.artwork.price}
                    increment={increment}
                    decrement={decrement}
                    count={order.number}
                    setSize={changeSize}
                    size={order.size}
                    placeOrder={placeOrder}
                    goBack={goBack}
                    error={error}
                />
            </div>
        </div>
    )
}




const Previewimages = (props) => {

    return (
        <div className="previewimage">
            {props.frame && <img src={props.frame} className="previewimage__frame" alt="frame"/>}
            {props.artwork && <img src={props.artwork} className="previewimage__artwork" alt="artwork"/>}
            <img className="previewimage__tee" src={props.tee} alt="tee"/>
        </div>
    )
}

const Description = (props)=>{
    var sizes =['M', 'L', 'XL', 'XLL']
    return (
        <div className ="description">
            <div className="description__inner">
                <div className="description__inner__price">
                    <p>${ parseFloat((props.artprice + props.frameprice + 100) * props.count).toFixed(2)}</p>
                    <div className="increment-decrement">
                            <div onClick={()=> props.decrement()}>-</div>
                            <p>{props.count}</p>
                            <div onClick={()=> props.increment()}>+</div>
                    </div>
                </div>
                
                <div className="description__inner__details">
                    <p>Description </p>
                    <p>Plan Tee With</p>
                    <p>Cotton knit button up with stripe pattern, ribbed collar with embroidered logo at chest cotton knit button up with stripe pattern, ribbed collar with embroidered logo at chest. </p>
                </div>

                <div className="description__inner__sizes">
                    <p>Select Size</p>
                    <div className="select-size">
                        {
                            sizes.map((size,index)=> (
                                <div key={index} className={`single-size ${props.size === size ? ' active' : ''}`} onClick={()=> props.setSize(size)}>{size}</div>
                            ))
                        }

                    </div>
                    <p style={{color:'red'}}>{props.error && 'Please select a size'}</p>
                </div>

                <div className="description__inner__bottom">
                    <div className="see-artworks" onClick={() => props.goBack()}>
                        See Artworks
                    </div>
                    <div className="product-btn" onClick={() => props.placeOrder()}>
                        Place An Order
                    </div>
                    <p>Starts shipping  One (1) week after order.</p>
                </div>

            </div>

        </div>
    )
}