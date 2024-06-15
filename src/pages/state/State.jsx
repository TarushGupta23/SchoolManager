import { state } from '../../DB_conditions'
import './state.css'
import { StateSchools } from './stateUtil'
import { useState } from 'react'

export default function State(props) {
    // ----------------- FOR SCHOOLS -----------------
    const initialSchoolForm = { name: 'tg_', minInc: 0, maxInc: 90_00_00_000, location: '' }
    const [schoolForm, setSchoolForm] = useState(initialSchoolForm);
    // alert(schoolForm.name)

    /* ==============================================
                    MAIN CODE
    ============================================== */
    return <>
        <section>Hero</section>
        <section>Income</section>
        <section>
            <h2 className="section-heading">Schools</h2>
            <div className="tab-content">
                <StateSchools schoolList={state.schools} form={schoolForm} setForm={setSchoolForm} initialForm={initialSchoolForm} />
            </div>
        </section>
    </>
}