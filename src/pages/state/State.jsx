import { state, school } from '../../DB_conditions'
import './state.css'
import { StateSchools, StudentDetails, TeacherDetails, WorkerDetails } from './stateUtil'
import { useState } from 'react'
import Button from '../../components/Button/BaseButton'

export default function State(props) {
    // ----------------- FOR NOTICES -----------------
    const [selectedNoticeTab, setSelectedNoticeTab] = useState('All')
    const renderNotices = () => {
        if (selectedNoticeTab === 'All') {
            return state.notices.map((record, index) => (
                <li key={index}>{record.txt} <span>({record.by})</span></li>
            ));
        } else if (selectedNoticeTab === 'schools') {
            return state.notices
                .filter(notice => (notice.by !== 'Center Head' && !notice.by.includes('branch')))
                .map((notice, index) => (
                    <li key={index}>{notice.txt} <span>({notice.by})</span></li>
                ))
        } else if (selectedNoticeTab === 'State Head') {
            return state.notices
                .filter(notice => notice.by.includes('branch'))
                .map((notice, index) => (
                    <li key={index}>{notice.txt}</li>
                ));
        } else if (selectedNoticeTab === 'Center Head') {
            return state.notices
                .filter(notice => notice.by === 'Center Head')
                .map((notice, index) => (
                    <li key={index}>{notice.txt}</li>
                ));
        }
    }
    
    // ----------------- FOR EXPENDITURE -----------------
    const [expenditureTab, setExpenditureTab] = useState('Overall');
    const renderExpenditureTab = () => {
        switch (expenditureTab) {
            case 'Overall':
                return null;
            default:
                return null;
        }
    }
    
    // ----------------- FOR SCHOOLS -----------------
    const [schoolTab, setSelectedSchoolTab] = useState('School')
    
    // SCHOOL - DETAILS
    const initialSchoolForm = { name: '', minInc: 0, maxInc: 90_00_00_000, location: '' }
    const [schoolForm, setSchoolForm] = useState(initialSchoolForm);

    // STUDENT - DETAILS
    const StudentDetailsInitialForm = { name: '', admissionNo: '', classes: [], sections: [], group: [true, true, true, true], rollNo: '', dropDown: [false, false], fees: [0, 9_00_000] }
    const [studentDetailsForm, setStudentDetailsForm] = useState(StudentDetailsInitialForm)
    
    // TEACHER - DETAILS
    const initialTeacherFormState = { name: '', classes: [], degrees: [], minSal: 0, maxSal: 1_00_000, subjects: [], teacherDropDown: [false, false, false], oasisNo: '', school: 'DAV, Ludhiana' }
    const [teacherDetailsForm, setTeacherDetailsForm] = useState(initialTeacherFormState);
    
    // SCHOOL STAFF - DETAILS
    const initialWorkerFormState = { name: '', minSal: 0, maxSal: 1_00_000 };
    const [workerDetailsForm, setWorkerDetilsForm] = useState(initialWorkerFormState);


    const renderSchoolTab = () => {
        switch (schoolTab) {
            case 'School':
                return <StateSchools schoolList={state.schools} form={schoolForm} setForm={setSchoolForm} initialForm={initialSchoolForm} />
            case 'Students':
                return StudentDetails(school, studentDetailsForm, setStudentDetailsForm, StudentDetailsInitialForm);
            case 'Teacher': 
                return TeacherDetails(school, teacherDetailsForm, setTeacherDetailsForm, initialTeacherFormState);
            case 'SchoolStaff':
                return WorkerDetails(school, workerDetailsForm, setWorkerDetilsForm, initialWorkerFormState);
        }
    }


    /* ==============================================
                    MAIN CODE
    ============================================== */
    return <>
        <section id="school-hero-section">
            <div className="school-logo"><img src="images/org-logo.png" alt="" /></div>
            <div className="school-content">
                <h2 className="school-name">
                    Punjab Branch
                    <Button text="View Staff" />
                </h2>
                <div className="hero-container">
                    <li>
                        <h4>Head</h4>  <span>Dr Anu Verma</span>
                    </li>
                    <li>
                        <h4>Chairman</h4>  <span>Cybernauts</span>
                    </li>
                </div>
            </div>
        </section>

        <section id="notice-board">
            <h2 className="section-heading">Notice Board</h2>
            <div className="tab-container">
                <ul>
                    <div className={selectedNoticeTab === "All"? "tab tab-selected" : "tab"} onClick={() => setSelectedNoticeTab("All")}>All</div>
                    <div className={selectedNoticeTab === "Center Head"? "tab tab-selected" : "tab"} onClick={() => setSelectedNoticeTab("Center Head")}>Center Head</div>
                    <div className={selectedNoticeTab === "State Head"? "tab tab-selected" : "tab"} onClick={() => setSelectedNoticeTab("State Head")}>State Heads</div>
                    <div className={selectedNoticeTab === "schools"? "tab tab-selected" : "tab"} onClick={() => setSelectedNoticeTab("schools")}>Schools</div>
                </ul>
            </div>
            <div className="notice-content tab-content">
                <ul>
                    {renderNotices()}
                </ul>
            </div>
        </section>

        <section>
            <h2 className="section-heading">Expenditure</h2>
            <div className="tab-container">
                <ul>
                    <div className={expenditureTab === "Overall"? "tab tab-selected" : "tab"} onClick={() => setExpenditureTab("Overall")}>Overall</div>
                    <div className={expenditureTab === "Staff Salary"? "tab tab-selected" : "tab"} onClick={() => setExpenditureTab("Staff Salary")}>Staff Salary</div>
                    <div className={expenditureTab === "Schools"? "tab tab-selected" : "tab"} onClick={() => setExpenditureTab("Schools")}>Schools</div>
                </ul>
            </div>
            <div className="tab-content">
                {renderExpenditureTab()}
            </div>
        </section>

        <section>
            <h2 className="section-heading">Schools</h2>
            <div className="tab-container">
                <ul>
                    <div className={schoolTab === "School"? "tab tab-selected" : "tab"} onClick={() => setSelectedSchoolTab("School")}>Schools</div>
                    <div className={schoolTab === "Teacher"? "tab tab-selected" : "tab"} onClick={() => setSelectedSchoolTab("Teacher")}>Teacher</div>
                    <div className={schoolTab === "SchoolStaff"? "tab tab-selected" : "tab"} onClick={() => setSelectedSchoolTab("SchoolStaff")}>School Staff</div>
                    <div className={schoolTab === "Students"? "tab tab-selected" : "tab"} onClick={() => setSelectedSchoolTab("Students")}>Students</div>
                </ul>
            </div>
            <div className="tab-content">
                {renderSchoolTab()}
            </div>
        </section>
    </>
}