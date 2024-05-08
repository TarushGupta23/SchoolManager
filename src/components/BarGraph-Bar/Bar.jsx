import "./bar.css";
import db from "./../../DB_conditions";

export default function Bar(props) {
    const marks = props.marks;
    let color = "";
    if (props.length < db.passingMarks) {
        color = "red";
    } else if (props.length < (db.passingMarks + 100)/2) {
        color = "yello";
    } else {
        color = "green"
    }
    return (
        <>
        <li>
            <span className="grade-sub-name">{marks.subjName}</span>
                <div className={"bar-graph-bar " + color} style={{ "--length": marks.length }}></div>
            <span className="value">{marks.length}</span>
        </li>
        </>);
}