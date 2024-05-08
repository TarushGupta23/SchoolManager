import "./bar.css";
import db from "./../../DB_conditions";

export default function Bar(props) {
    const info = props.info;
    /* marks = {
        val
        maxVal
        title
        desc [ topics covered ]
    } */
    let color = "";
    const percent = Math.round(info.val / info.maxVal * 100);
    if (percent < props.minVal) {
        color = "red";
    } else if (percent < (props.minVal + 100)/2) {
        color = "yello";
    } else {
        color = "green"
    }
    return (<>
        <li className="bar-item">
            <span className="grade-sub-name">{info.title}</span>
            <span className="info-icon">&#9432;<span>{info.desc}</span></span>
            <div className={"bar-graph-bar " + color} style={{ "--length": percent }}></div>
            <span className="value">{percent}%</span>
        </li>
        </>);
}