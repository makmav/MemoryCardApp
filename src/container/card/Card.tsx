import React, {useRef, useEffect} from "react";
import { FiVolume2, FiPlusCircle } from "react-icons/fi";
import "./Card.scss";

function CardContent(): React.ReactElement {
    const wordWidth =  useRef<HTMLDivElement>(null);
    const btn = useRef(null);
    useEffect(() => {
        const { current } = wordWidth;
        if (current && current.offsetWidth > 300) {
            current.style.fontSize = "15px";
        }
    });

    function btnAnimate(e: React.SyntheticEvent) {
        e.stopPropagation();
        e.preventDefault();
        let et = e.currentTarget;
        et.classList.remove("animate");
        et.classList.add("animate");
        setTimeout(function() {
            et.classList.remove("animate");
        }, 700);
    }
    return (
        <div className="cardContainer" >
            <div ref={wordWidth} className="wordContainer">
                editor-at-large
            </div>
            <div className="horn">
                <FiVolume2 />
            </div>
            <div className="gradient">点击卡片查看释义</div>
            <div className="button">
                <button onTouchStart={(e: React.SyntheticEvent) => {e.preventDefault(); e.stopPropagation()}} onClick={btnAnimate} ref={btn} className="bubbly-button">
                    <FiPlusCircle />
                </button>
            </div>
        </div>
    );
}

export default CardContent;
