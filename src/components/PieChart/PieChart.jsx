import "./pieChart.css"
import React, { useState } from 'react';

export default function PieChart(props) {
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    const handleMouseMove = (event) => {
        setHoverPosition({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };


    let color = "";
    let val = Math.floor(props.val/props.maxVal*100);
    if (val < props.minVal-10) {
        color = "red";
    } else if (val < props.minVal) {
        color = "yello";
    } else {
        color = "green";
    }
    val += "%";
    if (props.isFractional) {
        val = props.val + "/" + props.maxVal;
    }
    
    const hoverDiv = (<>
    <span className="hover-div" style={{ top: hoverPosition.y, left: hoverPosition.x }}>
        {props.val + "/" + props.maxVal}
    </span>
    </>)
    
    return (
        <>
        <li className="attendence-box">
            <div className={"pie-chart "+color} style={{ '--percent-val': (props.val/props.maxVal*100)+"%"}} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {val}
                <div className="pie-title">{props.title}</div>
                {!props.isFractional && hovered && (hoverDiv)}
            </div>
            <div class="pie-desc">{props.desc}</div>
        </li>
        </>
    )
}