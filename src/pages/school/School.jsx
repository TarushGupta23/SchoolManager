import React, { useState } from "react";
import './school.css'
import Button from "../../components/Button/BaseButton";
import {overallExpenditure, TeacherExpenditure, WorkerExpenditure, Goals, StudentDetails, InfrastructureExpenditure, TeacherDetails, WorkerDetails, TutionFee, OverallIncome, BusFee} from "./SchoolUtil";

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
    const initialTeacherFormState = { name: '', classes: [], degrees: [], minSal: 0, maxSal: 1_00_000, subjects: [], teacherDropDown: [false, false, false], oasisNo: '' }
    const [teacherExpForm, setTeacherExpForm] = useState(initialTeacherFormState);

    // WORKER - EXPENDITURE
    const initialWorkerFormState = { name: '', minSal: 0, maxSal: 1_00_000 };
    const [workerExpForm, setWorkerExpForm] = useState(initialWorkerFormState);

    const expenditureTabs = ['Overall',  'Teachers Salary', 'Workers Salary', 'Infrastructure', 'Goals']
    const [selectedExpenditureTab, setSelectedExpenditureTab] = useState(expenditureTabs[0]);
    const renderExpenditureTab = () => {
        switch (selectedExpenditureTab) {
            case expenditureTabs[0]:
                return overallExpenditure(school);
            case expenditureTabs[1]: 
                return TeacherExpenditure(school, teacherExpForm, setTeacherExpForm, initialTeacherFormState);
            case expenditureTabs[2]:
                return WorkerExpenditure(school, workerExpForm, setWorkerExpForm, initialWorkerFormState)
            case expenditureTabs[3]:
                return InfrastructureExpenditure(school.infrastructureExpenditure);
            case expenditureTabs[4]:
                return Goals(school.goals, school.savings)
            default:
                return <div>Hello_T_</div>
        }
    }

    // ----------------- FOR INCOME -----------------
    const [selectedIncomeTab, setSelectedIncomeTab] = useState('Overall');
    // BRIEF - DETAILS
    const [briefIncomeTab, setBriefIncomeTab] = useState('classes')
    // STUDENT CLASS - DETAILS
    const StudentDetailsInitialForm = { name: '', admissionNo: '', classes: [], sections: [], group: [true, true, true, true], rollNo: '', dropDown: [false, false], fees: [0, 9_00_000] }
    const [tutionForm, settutionForm] = useState(StudentDetailsInitialForm)
    // STUDENT BUS - DETAILS
    const studentBusInitialForm = { name: '', admissionNo: '', classes: [], sections: [], dropDown: [false, false, false, false], buses: [], drivers: [] }
    const [busForm, setBusForm] = useState(studentBusInitialForm)

    const renderFeeStruTab = () => {
        switch (selectedIncomeTab) {
            case 'Tution Fee':
                return TutionFee(school, tutionForm, settutionForm, StudentDetailsInitialForm)
            case 'Overall':
                return OverallIncome(school, briefIncomeTab, setBriefIncomeTab);
            case 'Buss Fee': 
                return BusFee(school, busForm, setBusForm, studentBusInitialForm);
            default:
                return <div>Hello</div>
        }
    }

    // ----------------- FOR STAFF & STUDENTS -----------------
    // STUDENT - DETAILS
    const [studentDetailsForm, setStudentDetailsForm] = useState(StudentDetailsInitialForm)
    
    // TEACHER - DETAILS
    const [teacherDetailsForm, setTeacherDetailsForm] = useState(initialTeacherFormState);
    
    // TEACHER - DETAILS
    const [workerDetailsForm, setWorkerDetilsForm] = useState(initialWorkerFormState);

    const [selectedStaffTab, setSelectedStaffTab] = useState('Students')
    const renderStaffTab = () => {
        switch (selectedStaffTab) {
            case 'Students':
                return StudentDetails(school, studentDetailsForm, setStudentDetailsForm, StudentDetailsInitialForm);
            case 'Teachers': 
                return TeacherDetails(school, teacherDetailsForm, setTeacherDetailsForm, initialTeacherFormState);
            case 'Workers':
                return WorkerDetails(school, workerDetailsForm, setWorkerDetilsForm, initialWorkerFormState);
            default: 
                return null;
        }
    }

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
                <div className="tab-buttons">
                    <Button text='Set Target' />
                </div>
                {renderExpenditureTab()}
            </div>
        </section>

        <section id="income">
            <h2 className="section-heading">Fee Structure</h2>
            <div className="tab-container">
                <ul>
                    <div className={selectedIncomeTab==='Overall'? 'tab tab-selected' : 'tab'} onClick={() => setSelectedIncomeTab('Overall')}>Brief</div>
                    <div className={selectedIncomeTab==='Tution Fee'? 'tab tab-selected' : 'tab'} onClick={() => setSelectedIncomeTab('Tution Fee')}>Tution Fee</div>
                    <div className={selectedIncomeTab==='Buss Fee'? 'tab tab-selected' : 'tab'} onClick={() => setSelectedIncomeTab('Buss Fee')}>Buss Fee</div>
                </ul>
            </div>
            <div className="tab-content">
                { renderFeeStruTab() }
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
                {renderStaffTab()}
            </div>
        </section>
    </>)
}