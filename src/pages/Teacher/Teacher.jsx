import "./teacher.css"
import Button from "../../components/Button/BaseButton";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import ProfileBox from "../../components/profile-item/ProfileBox";
import { useState } from "react";
import db from "../../DB_conditions";
import Table from "../../components/table/Table";
import TeacherFull from "../../components/popups/TeacherFull";
import ClassAttendence from "../../components/popups/ClassAttendence";
import ClassNotice from "../../components/popups/ClassNotice";
import ClassMarks from "../../components/popups/ClassMarks";
import Calender from "../../components/popups/Calender";

export default function Teacher(props) {
    const teacher = props.teacher
    
    // ----------------- FOR CLASSES TAB -----------------
    const [selectedClassTab, setSelectedClassTab] = useState(teacher.classes[0]);

    let studentList = db.classes[selectedClassTab.class][selectedClassTab.section].students;
    let initialFormState = {
        name: "",
        rollNoRange: [studentList[0].rollNo, studentList[studentList.length -1].rollNo],
        group: [true, true, true, true]
    };
    const [classForm, setClassForm] = useState(initialFormState)
    const handleClassTabClick = (classObj) => {
        setSelectedClassTab(classObj);
        studentList = db.classes[classObj.class][classObj.section].students;
        initialFormState = {
            name: "",
            rollNoRange: [studentList[0].rollNo, studentList[studentList.length -1].rollNo],
            group: [true, true, true, true]
        };
        setClassForm(initialFormState);
    }

    const renderClassStudents = () => {
        let filteredStudents = studentList.filter(student => {
            const nameFilter = classForm.name.trim().toLowerCase();
            const studentName = student.name.trim().toLowerCase();
            if (nameFilter && !studentName.includes(nameFilter)) {
                return false;
            }
            const rollNoFrom = classForm.rollNoRange[0];
            const rollNoTo = classForm.rollNoRange[1];
            if (student.rollNo < rollNoFrom || student.rollNo > rollNoTo) {
                return false;
            }
            return classForm.group[db.groups.indexOf(student.group)];
        });
    
        return filteredStudents.map((std, index) => (
            <ProfileBox key={index} name={std.name} img={std.pic} id={std.rollNo} />
        ));
    }

    // ----------------- FOR POPUPS -----------------
    const [currentPopup, setCurrentPopup] = useState(null);
    const handlePopupBtn = (popup) => {
        if (currentPopup === popup) {
            setCurrentPopup(null)
        } else {
            setCurrentPopup(popup);
        }
    }
    const renderPopup = () => {
        switch (currentPopup) {
            case null:
                return null;
            case 'full-details':
                return <TeacherFull teacher={teacher} calenderBtn={() => handlePopupBtn('calender')}/>;
            case 'class-attendence':
                return <ClassAttendence classList={db.classes[teacher.inchargeOf.class][teacher.inchargeOf.section].students} />
            case 'class-notice':
                return <ClassNotice />
            case 'class-marks':
                return <ClassMarks classList={db.classes[teacher.inchargeOf.class][teacher.inchargeOf.section].students} />
            case 'calender':
                return <Calender tags={ {
                    yello: {desc: "Casual Leaves", dates: teacher.leaves.casual}, 
                    green: {desc: "Earned Leaves", dates: teacher.leaves.earned}
                }}/>
            default:
                return null;
        }
    }
    
    return (
        <>
            <section id="teacher-info">
                <div className="info-left">
                    <ProfileImage location='person1.png' />
                </div>
                <div className="info-right">
                    <div className="info-r-top">
                        {teacher.name} <Button text="Details" func={() => (handlePopupBtn('full-details'))}/>
                    </div>
                    <div className="info-r-bottom">
                        {teacher.inchargeOf != null && (<>
                            <span>incharge of {teacher.inchargeOf.class} {teacher.inchargeOf.section}</span>
                            <div>
                                <Button text="Upload Attendence" func={() => (handlePopupBtn('class-attendence'))}/>
                                <Button text="Update Class Data"/>
                            </div>
                        </>)}
                    </div>
                </div>
            </section>

            <section id="notice-board">
                <h2 className="section-heading">Notice Board</h2>
                <div className="notice-content tab-content">
                    <ul>
                        { teacher.notices.map((notice, index) => (<li key={index}>{notice.txt} <span>({notice.by})</span></li>)) }
                    </ul>
                </div>
            </section>

            <section id="classes-section">
                <h2 className="section-heading">Classes</h2>
                <div className="tab-container">
                    <ul>
                        { teacher.classes.map((classObj, index) => (
                            <div key={index} className={classObj===selectedClassTab ? "tab tab-selected" : "tab"} onClick={() => {handleClassTabClick(classObj)}}>{classObj.class} {classObj.section}</div>
                        )) }
                    </ul>
                </div>
                <div className="tab-content">
                    <h2 className="tab-explain-heading">NOTE: only filtered students will receive HW</h2>
                    <div className="tab-buttons">
                        <Button text="Give Notice" func={() => handlePopupBtn('class-notice')}/>
                        <Button text="Upload Marks" func={() => handlePopupBtn('class-marks')}/>
                    </div>
                    <ul className="student-list">
                        { renderClassStudents() }
                    </ul>
                    <form id="student-filter">
                        <h2 className="tab-explain-heading">Filter Students
                            <span>
                                <Button text="Clear Filter" func={() => {setClassForm(initialFormState)}} />
                            </span>
                        </h2>
                        <div className="form-group">
                            <div>
                                <h4>Filter by Roll Number or Name </h4>
                                <input type="text" name="name" value={classForm.name} placeholder="Search Name" onChange={(e) => setClassForm({ ...classForm, name: e.target.value })} />
                                <span>
                                    <h4>Roll number range:</h4>
                                    <input type="number" name="name" value={classForm.rollNoRange[0]} placeholder="Roll no. From" onChange={(e) => setClassForm({ ...classForm, rollNoRange: [parseInt(e.target.value), classForm.rollNoRange[1]] })} />
                                    <input type="number" name="name" value={classForm.rollNoRange[1]} placeholder="Roll no. To" onChange={(e) => setClassForm({ ...classForm, rollNoRange: [classForm.rollNoRange[0], parseInt(e.target.value)] })} />
                                </span>
                            </div>
                            <div className="form-checkbox">
                                <h4>Filter by Group</h4>
                                <p>
                                {db.groups.map((grp, index) => (
                                    <span key={index}>
                                        <input 
                                            type="checkbox" 
                                            name={grp} 
                                            id={grp} 
                                            checked={classForm.group[index]} 
                                            onChange={(e) => {
                                                const updatedGroups = [...classForm.group];
                                                updatedGroups[index] = e.target.checked;
                                                setClassForm({ ...classForm, group: updatedGroups });
                                            }}
                                        />
                                        {grp}
                                    </span>
                                ))}
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <section id="timetable-section">
                <h2 className="section-heading">Time Table</h2>
                <div className="tab-content">
                    <Table table={teacher.timeTable}/>
                </div>
            </section>

            {renderPopup()}
            {
                (currentPopup === null) ? null : (<div className="closePopup"> <Button text="close" func={() => handlePopupBtn(null)}/> </div>)
            }
        </>
    )
}