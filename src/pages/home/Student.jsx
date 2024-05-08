import "./student.css"
import Button from "./../../components/Button/BaseButton";
import Bar from "./../../components/BarGraph-Bar/Bar";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import PieChart from "../../components/PieChart/PieChart";
import db from "../../DB_conditions";

export default function Student(props) {
    const student = props.student;
    let marksExplain = "Tell what is hapenning"
    return (
        <>
            <section id="student-info">
                <div className="info-left">
                    <ProfileImage location={student.profilePic}/>
                </div>
                <div className="info-right">
                    <div className="info-r-top"> {student.name} </div>
                    <div className="info-r-bottom">
                        <span>Roll No: {student.rollNo}</span>
                        <span>{student.class.class} {student.class.section}</span>
                        <Button text="Details" />
                    </div>
                </div>
            </section>


            <section id="student-homework">
                <h2 className="section-heading">Homework</h2>
                <div className="tab-container">
                    <ul>
                        <div className="tab tab-selected">All</div>
                        <div className="tab">Subj 1</div>
                        <div className="tab">Subj 2</div>
                        <div className="tab">Subj 3</div>
                    </ul>
                </div>
                <div className="homework-content tab-content">
                    <ul>
                        <li>hello this is home work 1</li>
                        <li>hello this is home work 2</li>
                        <li>hello this is home work 3</li>
                        <li>hello this is home work 4</li>
                    </ul>
                </div>
            </section>


            <section id="student-grades">
                <h2 className="section-heading">Grades</h2>
                <div className="tab-container">
                    <ul>
                        <div className="tab tab-selected">Final Exams</div>
                        <div className="tab">class Tests</div>
                        <div className="tab">Mid Sem</div>
                        <div className="tab">Assignments</div>
                    </ul>

                </div>
                <div className="grades-content tab-content">
                    <div className="tab-buttons">
                        <Button text="Detailed Report" />
                        <Button text="Progress"/>
                    </div>
                    <h2 className="tab-explain-heading">{marksExplain}</h2>
                    <div className="bar-graph">
                        <ul>
                            
                        </ul>
                    </div>

                    <div className="tab-content-nav">
                        <li className="tab-content-btn tab-content-selected">All</li>
                        <li className="tab-content-btn">Subj 1</li>
                        <li className="tab-content-btn">Subj 2</li>
                        <li className="tab-content-btn">Subj 3</li>
                        <li className="tab-content-btn">Subj 3</li>
                    </div>
                </div>
            </section>


            <section id="student-attendence">
                <h2 className="section-heading">Attendance</h2>
                <div className="tab-content attendence-content">
                    <div className="tab-buttons">
                        <Button text="Time Table" />
                        <Button text="Calender View" />
                    </div>
                    <ul className="pie-grid-box">
                            <PieChart isFractional={false} val={student.attendence} maxVal={db.classes[student.class.class][student.class.section].totalClasses} minVal={db.minAttendence}/>
                    </ul>
                </div>
            </section>


            <section id="student-ana-record">
                <h2 className="section-heading">Anecdotal Record</h2>
                <div className="anac-content tab-content">
                    <ul>
                        <li>hello this is home work 1</li>
                        <li>hello this is home work 2</li>
                        <li>hello this is home work 3</li>
                        <li>hello this is home work 4</li>
                    </ul>
                </div>
            </section>
        </>
    )
}