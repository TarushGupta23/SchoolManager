import "./profileBox.css";
import ProfileImage from "../ProfileImage/ProfileImage";

export default function SchoolProfile(props) {
    const color = props.color || "";
    const tempFunc = () => { return }
    const func = props.func || tempFunc
    const netIncome = props.netIncome.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
    return (
        <li className={"profile-box-item "+color} onClick={func}>
            <div className="profile-box-left">
                <ProfileImage location={props.img} />
            </div>
            <div className="profile-box-right">
                <div className="pb-r-top">{props.name}</div>
                <div className="pb-r-bottom">{props.location}</div>
                <div className="pb-r-bottom">{props.expenditure? 'loan': 'net income'}: {netIncome}</div>
            </div>
        </li>
    )
}