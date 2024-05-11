import "./baseButton.css";

export default function BaseButton(props) {
    const tempFunc = () => {
        alert("Not Implemented Yet!!");
    }
    const func = props.func || tempFunc
    return <button className="basic-btn" type="button" onClick={() => func()}> {props.text} </button>
}