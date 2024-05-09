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
    if (percent < props.minVal) { // 33%
        color = "red";
    } else if (percent < 60) {
        color = "yello";
    } else {
        color = "green"
    }
    if (info.maxVal == 0) {
        return null;
    }
    return (<>
        <li className="bar-item">
            <span className="grade-sub-name">{info.title}</span>
            <span className="info-icon">
                &#9432;
                <span> {info.val}/{info.maxVal} <br/> {info.desc} </span>
            </span>
            <div className={"bar-graph-bar " + color} style={{ "--length": percent }}></div>
            <span className="value">{percent}%</span>
        </li>
        </>);
}