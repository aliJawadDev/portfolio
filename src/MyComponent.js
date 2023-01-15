import React, { useState, useEffect } from 'react';
import './MyComponent.css';

export function ProgressBar(props) {
    const [count, setCount] = useState(props.start);
    const [start, setStart] = useState(false);
    
    
    setTimeout(() => {
        if(start){
        if (count < props.total) {
            setTimeout(function () {
                setCount(count + props.speed)
            }, 10);
        }
    }
    }, props.delay ? props.delay : 10);
    setInterval(() => {
        isScrolledIntoView();
    }, 500);
    function isScrolledIntoView() {
        if (!start) {
            var el = document.getElementById(props.id);
                if (el) {
                    var rect = el.getBoundingClientRect();
                    var elemBottom = rect.bottom;
                    var isVisible = elemBottom <= window.innerHeight;
                    if (isVisible) {
                        setStart(true);
                    }
                }
        }
    }
    return (
        <div id={props.id} className={props.className + " progressBarParentCon"}>
            {props.title && <p className="progressBarTitle">{props.title}</p>}
            <div className="progressBarContainer">
                <div className="progressBarFill" style={{ width: count + "%", fontSize: props.fontSize }}>{count}%</div>
            </div>
        </div>
    );

}

export function NavBar(props) {
    const [NavOpen, setNavOpen] = useState(false);
    return (
        <div className={NavOpen ? "NavBarCon NavSMOpen " + props.className : "NavBarCon " + props.className}>
            <div onClick={() => setNavOpen(!NavOpen)} className="NavOpenButton"><i className={NavOpen ? "fa fa-close" : "fa fa-bars"} /></div>
            <NavButton onClick={() => setNavOpen(false)} to="#about" className={NavOpen ? "" : "NavLinkClose"} text="About" />
            <NavButton onClick={() => setNavOpen(false)} to="#skills" className={NavOpen ? "" : "NavLinkClose"} text="Skills" />
            <NavButton onClick={() => setNavOpen(false)} to="#projects" className={NavOpen ? "" : "NavLinkClose"} text="Projects" />
            <NavButton onClick={() => setNavOpen(false)} to="#contact" className={NavOpen ? "" : "NavLinkClose"} text="Contact" />
        </div>
    );
}
export function NavButton(props) {
    return (
        <a onClick={props.onClick} href={props.to} className={"NavButton " + props.className}>
            {props.text}
        </a>
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
        <div className={props.parentContainerClassName} style={{ ...props.parentContainerStyle, display: 'flex', flexDirection: 'column' }}>
            <div style={{ ...props.containerStyle, position: 'relative', backgroundColor: "rgba(0,0,0,0.2)", height: 100 + "%", width: 100 + "%" }}>
                <div onClick={waiting && PreviousBtn} className="is_leftIconConStyle" style={props.leftIconConStyle}>
                    <i style={props.is_leftIconStyle} className={leftClicked ? "fa fa-arrow-circle-left is_leftIconStyle leftClicked" : "fa fa-arrow-circle-left is_leftIconStyle"} />
                </div>
                <img src={images[count]} className={waiting ? "animate__animated animate__fadeIn is_image" : "is_image"} />
                <div onClick={waiting && NextBtn} className="is_rightIconConStyle" style={props.rightIconConStyle}>
                    <i style={props.is_rightIconStyle} className={rightClicked ? "fa fa-arrow-circle-right is_rightIconStyle rightClicked" : "fa fa-arrow-circle-right is_rightIconStyle"} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                {images.map((i, index) => <i onClick={() => setCount(index)} className={count === index ? "fa fa-circle is_dot is_dot_selected" : "fa fa-circle is_dot"}></i>)}
            </div>
        </div>
    );
}