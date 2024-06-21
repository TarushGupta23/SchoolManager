import { state } from '../../DB_conditions'
import './state.css'
import { StateSchools } from './stateUtil'
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
                    <li key={index}>({notice.by}) {notice.txt}</li>
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

    // ----------------- FOR SCHOOLS -----------------
    const initialSchoolForm = { name: '', minInc: 0, maxInc: 90_00_00_000, location: '' }
    const [schoolForm, setSchoolForm] = useState(initialSchoolForm);
    // alert(schoolForm.name)

    /* ==============================================
                    MAIN CODE
    ============================================== */
    return <>
        <section id="school-hero-section">
            <div className="school-logo"><img src="images/org-logo.png" alt="" /></div>
            <div className="school-content">
                <h2 className="school-name">
                    Punjab Branch
                    <Button text="View Members" />
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
                    {/* { state.notices.map((notice, index) => (<li key={index}>{notice.txt} <span>({notice.by})</span></li>)) } */}
                </ul>
            </div>
        </section>

        <section>
            <h2 className="section-heading">Income</h2>
            <div className="tab-container">
                <ul>
                    <div className="tab">Brief</div>
                    <div className="tab">Details</div>
                </ul>
            </div>
            <div className="tab-content">

            </div>
        </section>

        <section>
            <h2 className="section-heading">Expenditure</h2>
            {/* salary of workers, aids to schools */}
            <div className="tab-container">
                <ul>
                    <div className="tab">Overall</div>
                    <div className="tab">Staff Salary</div>
                    <div className="tab">Schools</div>
                </ul>
            </div>
            <div className="tab-content"></div>
        </section>

        <section>
            <h2 className="section-heading">Schools</h2>
            <div className="tab-container">
                <ul>
                    <div className="tab tab-selected">Schools</div>
                    <div className="tab">Teachers</div>
                    <div className="tab">Students</div>
                </ul>
            </div>
            <div className="tab-content">
                <StateSchools schoolList={state.schools} form={schoolForm} setForm={setSchoolForm} initialForm={initialSchoolForm} />
            </div>
        </section>
    </>
}