import React, { useState } from "react";
import './school.css'
import Button from "../../components/Button/BaseButton";

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
                .filter(notice => (notice.by != 'Central Head' && notice.by != 'State Head'))
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
                    <div className="tab tab-selected">Overall</div>
                    <div className="tab">Teacher Salary</div>
                    <div className="tab">Workers Salary</div>
                    <div className="tab">Infrastructure</div>
                    <div className="tab">Other Expenditures</div>
                    <div className="tab">Goals</div>
                </ul>
            </div>
            <div className="tab-content">
                hlo
            </div>
        </section>

        <section id="income">
            <h2 className="section-heading">Fee Structure</h2>
            <div className="tab-container">
                <ul>
                    <div className="tab">Tution Fee</div>
                    <div className="tab">Bus Fee</div>
                    <div className="tab">Savings</div>
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
                    <div className="tab">Teachers</div>
                    <div className="tab">Workers</div>
                    <div className="tab">Students</div>
                </ul>
            </div>
            <div className="tab-content">
                helo
            </div>
        </section>
    </>)
}