import "./profileImage.css"

export default function ProfileImage(props) {
    return (
        <>
        <div className="profile-img-container">
            <img src={"/images/"+props.location} className="profile-img" />
        </div>
        </>
    );
}