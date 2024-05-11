import { useState } from "react";
import ProfileBox from "../profile-item/ProfileBox";
import BaseButton from "../Button/BaseButton";

export default function ClassAttendence(props) {
    const classList = props.classList;
    let list = classList.map(() => (false));
    const [attendenceList, setAttendenceList] = useState(list)
    const handleAttendence = (idx) => {
        setAttendenceList(prevList => {
            const newList = [...prevList];
            newList[idx] = !newList[idx];
            return newList;
        });
    }

    const renderStudents = () => {
        return classList.map((student, index) => (
            <ProfileBox name={student.name} img={student.pic} id={student.rollNo} key={index} func={() => handleAttendence(index) } color={attendenceList[index] ? "green" : "red"} />
        ))
    }
    return (
        <div className="popup">
            <section id="attendence-section">
                <h2 className="section-heading">Attendence</h2>
                <div className="tab-content">
                    <div className="tab-buttons">
                        <BaseButton text="Submit" />
                    </div>
                    <h2 className="tab-explain-heading">Click Students to mark them Present</h2>
                    <form action="">
                        <ul className="attendence-list student-list">
                            {renderStudents()}
                        </ul>
                    </form>
                </div>
            </section>
        </div>
    )
}