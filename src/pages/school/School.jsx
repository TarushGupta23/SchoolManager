import React from "react";
import './school.css'
import Button from "../../components/Button/BaseButton";

export default function School() {
    /* ==============================================
                    MAIN CODE
    ============================================== */
    return (<>
        <section id="school-hero-section">
            <div className="school-logo"><img src="images/org-logo.png" alt="" /></div>
            <div className="school-content">
                <h2 className="school-name">Ryan International School, Ludhiana <Button text="View Website" /></h2>
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
                    <div className="tab tab-selected">All</div>
                    <div className="tab">State Head</div>
                    <div className="tab">Org</div>
                    <div className="tab">Staff</div>
                </ul>
            </div>
            <div className="notice-content tab-content">
                <ul>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hellog</li>
                </ul>
            </div>
        </section>
        
        <section id="money">
            <h2 className="section-heading">Expenditure</h2>
            {/* need to show expences in bar graph format, teachers salary, staff salary, busses, infrastructure, goals... */}
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