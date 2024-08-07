import "./profileBox.css";
import ProfileImage from "../ProfileImage/ProfileImage";

export default function ProfileBox(props) {
    const color = props.color || "";
    const tempFunc = () => { return }
    const func = props.func || tempFunc
    const extra = props.extra || []
    return (
        <li className={"profile-box-item "+color} onClick={func}>
            <div className="profile-box-left">
                <ProfileImage location={props.img} />
            </div>
            <div className="profile-box-right">
                <div className="pb-r-top">{props.name}</div>
                <div className="pb-r-bottom">{props.id}</div>
                { extra.map(item => (<div className="pb-r-bottom">{item}</div>)) }
            </div>
        </li>
    )
}