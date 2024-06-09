import React, { useState } from "react";
import './school.css'
import Button from "../../components/Button/BaseButton";
import {overallExpenditure, TeacherExpenditure, WorkerExpenditure, Goals, StudentDetails} from "./SchoolUtil";

export default function School(props) {
    const school = props.school;
    // ----------------- FOR NOTICE BOARD -----------------
    const [noticeTab, setNoticeTab] = useState('All');
    const handleNoticeTabClick = (tab) => {
        setNoticeTab(tab);
    }
    const renderNoticeTab = () => {
        if (noticeTab === 'All') {
            return school.notices.map((record, index) => (
                <li key={index}>({record.by}) {record.txt}</li>
            ));
        } else if (noticeTab === 'Staff') {
            return school.notices
                .filter(notice => (notice.by !== 'Central Head' && notice.by !== 'State Head'))
                .map((notice, index) => (
                    <li key={index}>({notice.by}) {notice.txt}</li>
                ))
        } else {
            return school.notices
                .filter(notice => notice.by === noticeTab)
                .map((notice, index) => (
                    <li key={index}>{notice.txt}</li>
                ));
        }
    }

    // ----------------- FOR EXPENDITURE -----------------
    // TEACHER - EXPENDITURE
    const initialTeacherExpenditureFormState = { name: '', classes: [], degrees: [], minSal: 0, maxSal: 1_00_000, subjects: [], teacherDropDown: [false, false, false] }
    const [teacherExpForm, setTeacherExpForm] = useState(initialTeacherExpenditureFormState);

    // WORKER - EXPENDITURE
    const initialWorkerExpenditureFormState = { name: '', minSal: 0, maxSal: 1_00_000 };
    const [workerExpForm, setWorkerExpForm] = useState(initialWorkerExpenditureFormState);

    const expenditureTabs = ['Overall',  'Teachers Salary', 'Workers Salary', 'Infrastructure', 'Goals']
    const [selectedExpenditureTab, setSelectedExpenditureTab] = useState(expenditureTabs[0]);
    const renderExpenditureTab = () => {
        switch (selectedExpenditureTab) {
            case expenditureTabs[0]:
                return overallExpenditure(school);
            case expenditureTabs[1]: 
                return TeacherExpenditure(school, teacherExpForm, setTeacherExpForm, initialTeacherExpenditureFormState);
            case expenditureTabs[2]:
                return WorkerExpenditure(school, workerExpForm, setWorkerExpForm, initialWorkerExpenditureFormState)
            case expenditureTabs[4]:
                return Goals(school.goals, school.savings)
            default:
                return <div>Hello_T_</div>
        }
    }

    // ----------------- FOR INCOME -----------------
    const [selectedIncomeTab, setSelectedIncomeTab] = useState('Tution Fee');

    // ----------------- FOR STAFF & STUDENTS -----------------
    const StudentDetailsInitialForm = {
        name: '', admissionNo: '', classes: [], sections: [], group: [true, true, true, true], rollNo: '', dropDown: [false, false]
    }
    const [StudentDetailsForm, setStudentDetailsForm] = useState(StudentDetailsInitialForm)

    const [selectedStaffTab, setSelectedStaffTab] = useState('Students')

    // ----------------- FOR EXPENDITURE -----------------
    /* ==============================================
                    MAIN CODE
    ============================================== */
    return (<>
        <section id="school-hero-section">
            <div className="school-logo"><img src="images/org-logo.png" alt="" /></div>
            <div className="school-content">
                <h2 className="school-name">
                    {school.schoolName}
                    <Button text="View Website" func={() => { window.open(school.website, '_blank')}}/>
                </h2>
                <div className="hero-container">
                    <li>
                        <h4>Chairman</h4>  <span>Cybernauts</span>
                    </li>
                    <li>
                        <h4>Principal</h4>  <span>Dr Anu Verma</span>
                    </li>
                    <li>
                        <h4>Vice Principal</h4>  <span>Tanu Gupta</span>
                    </li>
                </div>
            </div>
        </section>

        <section id="notices">
            <h2 className="section-heading">Notice</h2>
            <div className="tab-container">
                <ul>
                    <div className={noticeTab === 'All' ? 'tab tab-selected' : 'tab'} onClick={()=>handleNoticeTabClick('All')}>All</div>
                    <div className={noticeTab === 'State Head' ? 'tab tab-selected' : 'tab'} onClick={()=>handleNoticeTabClick('State Head')}>State Head</div>
                    <div className={noticeTab === 'Central Head' ? 'tab tab-selected' : 'tab'} onClick={()=>handleNoticeTabClick('Central Head')}>Central Head</div>
                    <div className={noticeTab === 'Staff' ? 'tab tab-selected' : 'tab'} onClick={()=>handleNoticeTabClick('Staff')}>Staff</div>
                </ul>
            </div>
            <div className="notice-content tab-content">
                <ul>
                    {renderNoticeTab()}
                </ul>
            </div>
        </section>

        <section id="money">
            <h2 className="section-heading">Expenditure</h2>
            <div className="tab-container">
                <ul>
                    {expenditureTabs.map((tabName) => (
                        <div id={tabName} className={tabName === selectedExpenditureTab? 'tab tab-selected' : 'tab'} onClick={() => setSelectedExpenditureTab(tabName)}>{tabName}</div>
                    ))}
                </ul>
            </div>
            <div className="tab-content">
                {renderExpenditureTab()}
            </div>
        </section>

        <section id="income">
            <h2 className="section-heading">Fee Structure</h2>
            <div className="tab-container">
                <ul>
                    <div className={selectedIncomeTab==='Tution Fee'? 'tab tab-selected' : 'tab'} onClick={() => setSelectedIncomeTab('Tution Fee')}>Tution Fee</div>
                    <div className={selectedIncomeTab==='Buss Fee'? 'tab tab-selected' : 'tab'} onClick={() => setSelectedIncomeTab('Buss Fee')}>Buss Fee</div>
                    <div className={selectedIncomeTab==='Savings'? 'tab tab-selected' : 'tab'} onClick={() => setSelectedIncomeTab('Savings')}>Savings</div>
                </ul>
            </div>
            <div className="tab-content">
                hllo
            </div>
        </section>

        <section id="staff-students">
            <h2 className="section-heading">Staff and Student details</h2>
            <div className="tab-container">
                <ul>
                    <div className={selectedStaffTab === 'Students'? "tab-selected tab" : 'tab'} onClick={() => setSelectedStaffTab('Students')}>Students</div>
                    <div className={selectedStaffTab === 'Teachers'? "tab-selected tab" : 'tab'} onClick={() => setSelectedStaffTab('Teachers')}>Teachers</div>
                    <div className={selectedStaffTab === 'Workers'? "tab-selected tab" : 'tab'} onClick={() => setSelectedStaffTab('Workers')}>Workers</div>
                </ul>
            </div>
            <div className="tab-content">
                {StudentDetails(StudentDetailsForm, setStudentDetailsForm, StudentDetailsInitialForm)}
            </div>
        </section>
    </>)
}