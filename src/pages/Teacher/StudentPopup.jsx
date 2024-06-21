import ProfileImage from "../../components/ProfileImage/ProfileImage"
import Button from "../../components/Button/BaseButton"

export default function StudentPopup() {
    return <div className="popup">
        <section id="student-info">
            <div className="info-left">
                <ProfileImage location={'person1.png'} />
            </div>
            <div className="info-right">
                <div className="info-r-top"> Tarush Gupta </div>
                <div className="info-r-bottom">
                    <span>Roll No: 46</span>
                    <span>+1 NonMedical</span>
                    <Button text="View Profile" func={() => { window.open('/student', '_blank')}}/>
                </div>
            </div>
        </section>
        <section style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button text='add anacdotal record' />
            <Button text='upload marks' />
            <Button text='give notice' />
        </section>
    </div>
}