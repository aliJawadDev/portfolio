import React, { useState, useEffect } from 'react';
import './MyComponent.css';

export function ProgressBar(props) {
    const [count, setCount] = useState(props.start);
    const [ready, setReady] = useState(false);
    setTimeout(() => {
        setReady(true);
    }, props.delay ? props.delay : 10);
    useEffect(() => {
        if (props.startProgress) {
            if (ready && count < props.total) {
                setTimeout(function () {
                    setCount(count + props.speed)
                }, props.time);
            }
        }
    });
    return (
        <div className={props.className + " progressBarParentCon"}>
            {props.popup && <span className="progressBarPopUp">{props.popup}</span>}
            {props.title && <p className="progressBarTitle">{props.title}</p>}
            <div className="progressBarContainer">
                <div className="progressBarFill" style={{ width: count + "%", fontSize: props.fontSize }}>{count}%</div>
            </div>
        </div>
    );

}

export function NavBar(props) {
    return (
        <div className={"NavBarCon " + props.className}>
            <NavButton top={0} text="About" />
            <NavButton top={550} text="Skills" />
            <NavButton top={1020} text="Projects" />
            <NavButton top={2950} text="Contact" />
        </div>
    );
}
export function NavButton(props) {
    return (
        <p onClick={() => {
            window.scroll({
                top: props.top,
                behavior: 'smooth'
            });
        }} className="NavButton">
            {props.text}
        </p>
    );
}
export function ImageSlider(props) {
    const [count, setCount] = useState(0);
    const [leftClicked, setLeftClicked] = useState(false);
    const [rightClicked, setRightClicked] = useState(false);
    const [waiting, setWaiting] = useState(true);
    let images = props.images;
    function PreviousBtn() {
        setLeftClicked(true);
        setWaiting(false);
        setTimeout(() => {
            setWaiting(true);
            if (count === 0) {
                setCount(images.length - 1)
            }
            else {
                setCount(count - 1)
            }
        }, 20);
        setTimeout(() => {
            setLeftClicked(false);
        }, 150);
    }
    function NextBtn() {
        setRightClicked(true);
        setWaiting(false);
        setTimeout(() => {
            setWaiting(true);
                if (count === images.length - 1) {
                    setCount(0)
                }
                else {
                    setCount(count + 1)
                }    
        }, 20);
        setTimeout(() => {
            setRightClicked(false);
        }, 150);
    }
    return (
        <div className={props.parentContainerClassName} style={{ ...props.parentContainerStyle, display:'flex',flexDirection:'column'}}>
        <div style={{ ...props.containerStyle, position: 'relative',backgroundColor:"rgba(0,0,0,0.2)",height:100+"%",width:100+"%" }}>
            <div onClick={waiting&&PreviousBtn} className="is_leftIconConStyle" style={props.leftIconConStyle}>
                <i style={props.is_leftIconStyle} className={leftClicked ? "fa fa-arrow-circle-left is_leftIconStyle leftClicked" : "fa fa-arrow-circle-left is_leftIconStyle"} />
            </div>
            <img src={images[count]} className={waiting ? "animate__animated animate__fadeIn is_image" : "is_image"} />
            <div onClick={waiting&&NextBtn} className="is_rightIconConStyle" style={props.rightIconConStyle}>
                <i style={props.is_rightIconStyle} className={rightClicked ? "fa fa-arrow-circle-right is_rightIconStyle rightClicked" : "fa fa-arrow-circle-right is_rightIconStyle"} />
            </div>
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10}}>
            {images.map((i,index) => <i onClick={() => setCount(index)} class={count===index ? "fa fa-circle is_dot is_dot_selected" : "fa fa-circle is_dot" }></i>)}
        </div>
        </div>
    );
}