import "./profileBox.css";
import ProfileImage from "../ProfileImage/ProfileImage";

export default function ProfileBox(props) {
    return (
        <li className="profile-box-item">
            <div className="info-left">
                <ProfileImage location={props.img} />
            </div>
            <div className="info-right">
                <div className="info-r-top">{props.name}</div>
                <div className="info-r-bottom">{props.id}</div>
            </div>
        </li>
    )
}