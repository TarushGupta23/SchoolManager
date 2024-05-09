import React, { useState } from 'react';
import "./student.css"
import Button from "./../../components/Button/BaseButton";
import Bar from "./../../components/BarGraph-Bar/Bar";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import PieChart from "../../components/PieChart/PieChart";
import db from "../../DB_conditions";

export default function Student(props) {
    const student = props.student;
    const studentSubjectList = Object.keys(student.subjects)
    const stdClassDb = db.classes[student.class.class][student.class.section];

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

    // ----------------- FOR MARKS SECTION -----------------
    
    const testTypes = ["Class Tests", "Assignments", "Mid Term", "Final Exam"];
    const [selectedMarksTab, setSelectedMarksTab] = useState(testTypes[2]);
    const [selectedMarksSubj, setSelectedMarksSubj] = useState('All');

    const handleMarksTabClick = (tabName) => {
        setSelectedMarksTab(tabName);
    }
    const handleMarksSubjClick = (subject) => {
        setSelectedMarksSubj(subject);
    }

    const renderMarksContent = () => {
        let data = [];
        if (selectedMarksSubj === 'All') {
            if (selectedMarksTab === 'Class Tests' || selectedMarksTab === 'Assignments') {
                data = Object.entries(student.subjects).map(([subjName, subjData]) => {
                    return {
                        val: subjData[selectedMarksTab].reduce((acc, curr) => acc + curr, 0),
                        maxVal: stdClassDb.subjects[subjName][selectedMarksTab]["Maximum Marks"].reduce((acc, curr) => acc + curr, 0),
                        title: subjName,
                        desc: ""
                    }
                })
            } else {
                data = Object.entries(student.subjects).map(([subjName, subjData]) => {
                    return {
                        val: subjData[selectedMarksTab],
                        maxVal: stdClassDb.subjects[subjName][selectedMarksTab],
                        title: subjName,
                        desc: ""
                    }
                })
            }
        } else {
            if (selectedMarksTab === 'Class Tests' || selectedMarksTab === 'Assignments') {
                const studentDBSubj = stdClassDb.subjects[selectedMarksSubj][selectedMarksTab];
                data = student.subjects[selectedMarksSubj][selectedMarksTab].map((val, index) => {
                    return {
                        val: val, 
                        maxVal: studentDBSubj["Maximum Marks"][index],
                        title: studentDBSubj["Test Name"][index],
                        desc: studentDBSubj['topics'][index]
                    }
                })
            } else {
                data = [{
                    val: student.subjects[selectedMarksSubj][selectedMarksTab],
                    maxVal: stdClassDb.subjects[selectedMarksSubj][selectedMarksTab],
                    title: selectedMarksSubj,
                    desc: ""
                }]
            }
        }
        return data.map((info, index) => (
            <Bar info={info} key={index} minVal={db.passingMarks}/>
        ));
    }

    const renderMarksExplain = () => {
        let marksExplain = "";
        if (selectedMarksSubj === 'All') {
            if (selectedMarksTab === 'Class Tests' || selectedMarksTab === 'Assignments') {
                marksExplain = "Average performance in " + selectedMarksTab + " for all subjects"
            } else {
                marksExplain = selectedMarksTab + " Result (out of " + stdClassDb.subjects[studentSubjectList[0]][selectedMarksTab] +")";
            }
        } else {
            if (selectedMarksTab === 'Class Tests' || selectedMarksTab === 'Assignments') {
                marksExplain = "Performance in " + selectedMarksTab + " in " + selectedMarksSubj;
            } else {
                marksExplain = selectedMarksTab + " Result (out of " + stdClassDb.subjects[selectedMarksSubj][selectedMarksTab] +")";
            }
        }
        return marksExplain;
    }

    return (
        <>
            <section id="student-info">
                <div className="info-left">
                    <ProfileImage location={student.profilePic} />
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
                        {testTypes.map((type, index) => (
                            <div key={index} className={selectedMarksTab === type ? 'tab tab-selected' : 'tab'} onClick={() => handleMarksTabClick(type)} >{type}</div>
                        ))}
                    </ul>

                </div>
                <div className="grades-content tab-content">
                    <div className="tab-buttons">
                        <Button text="Detailed Report" />
                        <Button text="Progress" />
                    </div>
                    <h2 className="tab-explain-heading">{renderMarksExplain()}</h2>
                    <div className="bar-graph">
                        <ul>
                            {renderMarksContent()}
                        </ul>
                    </div>

                    <div className="tab-content-nav">
                        <li className={selectedMarksSubj === 'All' ? 'tab-content-btn tab-content-selected' : 'tab-content-btn'} onClick={() => handleMarksSubjClick('All')} >All</li>
                        {studentSubjectList.map((subj, index) => (
                            <li key={index} className={selectedMarksSubj === subj ? 'tab-content-btn tab-content-selected' : 'tab-content-btn'} onClick={() => handleMarksSubjClick(subj)} >{subj}</li>
                        ))}
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
                        <PieChart isFractional={false} val={student.attendence} maxVal={stdClassDb.totalClasses} minVal={db.minAttendence} />
                    </ul>
                </div>
            </section>


            <section id="student-ana-record">
                <h2 className="section-heading">Anecdotal Record</h2>
                <div className="anac-content tab-content">
                    <ul>
                        {student.anecdotalRecord.map((record, index) => { return <li>{record.txt}</li> })}
                    </ul>
                </div>
            </section>
        </>
    )
}