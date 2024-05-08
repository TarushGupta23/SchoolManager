import React, { useState } from 'react';
import "./student.css"
import Button from "./../../components/Button/BaseButton";
import Bar from "./../../components/BarGraph-Bar/Bar";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import PieChart from "../../components/PieChart/PieChart";
import db from "../../DB_conditions";

export default function Student(props) {
    const student = props.student;
    let marksExplain = "Tell what is hapenning"
    const studentSubjectList = Object.keys(student.subjects)

    // ----------------- FOR NOTICE BOARD -----------------
    const [selectedNoticeTab, setSelectedNoticeTab] = useState('All');
    const handleNoticeTabClick = (subject) => {
        setSelectedNoticeTab(subject);
    };
    const renderNoticeContent = () => {
        if (selectedNoticeTab === 'All') {
          return student.notices.map((record, index) => (
            <li key={index}>{record.txt}</li>
          ));
        } else {
          return student.notices
            .filter(notice => notice.subj === selectedNoticeTab)
            .map((notice, index) => (
              <li key={index}>{notice.txt}</li>
            ));
        }
      };
    
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


            {/* <section id="student-homework">
                <h2 className="section-heading">Homework</h2>
                <div className="tab-container">
                    <ul>
                        <div className="tab tab-selected">All</div>
                        {studentSubjectList.map((subject, index) => (
                            <div key={index} className="tab">{subject}</div>
                        ))}
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
            </section> */}
            <section id="student-homework">
      <h2 className="section-heading">Notice</h2>
      <div className="tab-container">
        <ul>
          <div className={selectedNoticeTab === 'All' ? 'tab tab-selected' : 'tab'} onClick={() => handleNoticeTabClick('All')}>All</div>
          {studentSubjectList.map((subject, index) => (
            <div key={index} className={selectedNoticeTab === subject ? 'tab tab-selected' : 'tab'} onClick={() => handleNoticeTabClick(subject)}>{subject}</div>
          ))}
        </ul>
      </div>
      <div className="homework-content tab-content">
        <ul>
          {renderNoticeContent()}
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
                            <Bar info={{val: 7, maxVal: 22, title: "Hindi", desc: "hello this is sample desc"}} minVal={db.passingMarks} />
                            <Bar info={{val: 22, maxVal: 22, title: "English", desc: "hello this is sample desc for 22"}} minVal={db.passingMarks} />
                            <Bar info={{val: 14, maxVal: 22, title: "punjabi", desc: "hello this is sample desc and this is a really really long lomg never ending desc hello this is sample desc and this is a really really long lomg never ending desc hello this is sample desc and this is a really really long lomg never ending desc"}} minVal={db.passingMarks} />
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
                        { student.anecdotalRecord.map((record, index) => { return <li>{record.txt}</li> }) }
                    </ul>
                </div>
            </section>
        </>
    )
}