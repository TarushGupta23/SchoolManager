import { state } from '../../DB_conditions'
import './state.css'
import { StateSchools } from './stateUtil'
import { useState } from 'react'
import Button from '../../components/Button/BaseButton'

export default function State(props) {
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
                    <div className="tab">All</div>
                    <div className="tab">Center Head</div>
                    <div className="tab">State heads</div>
                    <div className="tab">Schools</div>
                </ul>
            </div>
            <div className="notice-content tab-content">
                <ul>
                    { state.notices.map((notice, index) => (<li key={index}>{notice.txt} <span>({notice.by})</span></li>)) }
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