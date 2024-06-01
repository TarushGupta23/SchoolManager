// import "teacher-full.css"
import BaseButton from "../Button/BaseButton";
import PieChart from "../PieChart/PieChart"

export default function TeacherFull(props) {
    const teacher = props.teacher;
    return (
    <div className="popup">
        <section id="teacher-info">
            <div className="info-top">
                <div className="info-right">
                    <div className="info-r-top">
                        {teacher.name}
                        <span><strong>CBSE OASIS No:</strong> {teacher.id}</span>
                    </div>
                    {teacher.inchargeOf != null && (
                        <div className="info-r-bottom">
                            <span>incharge of {teacher.inchargeOf.class} {teacher.inchargeOf.section}</span>
                        </div>
                    )}
                    <div className="info-bottom">
                        <span><strong>Salary: </strong>{teacher.salary}</span> <span><strong>Gender: </strong>{teacher.gender}</span>
                    </div>
                </div>
            </div>  
        </section>
    
    
        <section id="salary-leaves">
            <h2 className="section-heading">Leaves</h2>
            <div className="tab-content attendence-content">
                <div className="tab-buttons">
                    <BaseButton text="View Calender" func={props.calenderBtn}/>
                </div>
                <ul className="pie-grid-box">
                    <PieChart isFractional={true} val={teacher.earnedLeaves[0]} maxVal={teacher.earnedLeaves[1]} minVal={-75} desc="earned leaves taken/total this year" />
                    <PieChart isFractional={true} val={teacher.casualLeaves[0]} maxVal={teacher.casualLeaves[1]} minVal={-75} desc="casual leaves taken/total" />
                </ul>
            </div>
        </section>
    
    
        <section id="teacher-degree">
            <h2 className="section-heading">Degrees</h2>
            <div className="tab-content degree-content">
                <ul>
                    {teacher.degrees.map((degree) => (<li>{degree}</li>))}
                </ul>
            </div>
        </section>
    </div>)
}