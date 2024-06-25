import db from "../../DB_conditions";
import ProfileBox from "../../components/profile-item/ProfileBox";
import SchoolProfile from "../../components/profile-item/SchoolProfile";
import SchoolFilter from "./filters/SchoolFilter";
import WorkerFilter, { StaffFilter } from "./filters/WorkerFilter";
import TeacherFilter from "./filters/TeacherFilter";
import StudentFilter from "./filters/StudentFilter";
import BaseButton from "../../components/Button/BaseButton";

function RenderProfiles(profileList) {
    return <ul className="student-list">
        {profileList.map((item, index) => (
            (item.extra) ?
            <ProfileBox key={index} name={item.name} img='person1.png' id={item.id} extra={item.extra} func={item.func}/>
            : <ProfileBox key={index} name={item.name} img='person1.png' id={item.id} func={item.func} />
        ))}
    </ul>
}

/* =====================================================================
        SCHOOL DETAILS
===================================================================== */
export function StateSchools(props) {
    const form = props.form;
    let schools = props.schoolList.filter(school => {
        const nameFilter = form.name.trim().toLowerCase();
        const locationFilter = form.location.trim().toLowerCase()
        if (nameFilter && !school.name.trim().toLowerCase().includes(nameFilter)) {
            return false
        } if (locationFilter && !school.location.trim().toLowerCase().includes(locationFilter)) {
            return false
        } if (school.netIncome < form.minInc || school.netIncome > form.maxInc) {
            return false
        }
        return true;
    })
    return <>
        <h2 className="tab-explain-heading">Click schools to view their profiles</h2>
        <ul className="student-list" id="school-list">
            {schools.map((item, index) => (
                <SchoolProfile key={index} name={item.name} img='org-logo.png' id={item.id} netIncome={item.netIncome} location={item.location} />
            ))}
        </ul>
        <SchoolFilter form={props.form} setForm={props.setForm} initialForm={props.initialForm} />
    </>
}
export function StudentDetails(school, form, setForm, initialForm) {
    let studentList = school.students.filter(student => {
        const nameFilter = form.name.trim().toLowerCase();
        const admissionNo = form.admissionNo.trim().toLowerCase();
        if (nameFilter && !student.name.trim().toLowerCase().includes(nameFilter)) {
            return false
        } if (admissionNo && !(student.admissionNo + '').trim().toLowerCase().includes(admissionNo)) {
            return false
        } if (student.fees < form.fees[0] || student.fees > form.fees[1]) {
            return false
        } if (form.classes.length != 0 && !form.classes.includes(student.class)) {
            return false
        } if (form.sections.length != 0 && !form.sections.includes(student.section)) {
            return false
        }
        return form.group[db.groups.indexOf(student.group)];
    })
    return <>
        <h2 className="tab-explain-heading">Click students to edit their profiles</h2>
        { RenderProfiles(studentList.map(student => ({
            name: student.name,
            id: `Fees: ${student.fees.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}`
        }))) }
        <StudentFilter form={form} setForm={setForm} initialForm={initialForm}/>
    </>
}
export function TeacherDetails(school, form, setForm, initialForm) {
    let teacherList = school.teachers;
    teacherList = teacherList.filter((teacher) => {
        const nameFilter = form.name.trim().toLowerCase();
        const teacherName = teacher.name.trim().toLowerCase();
        const salartFrom = form.minSal;
        const salaryTo = form.maxSal;
        const idFilter = form.oasisNo.trim().toLowerCase();
        const teacherId = teacher.oasisNo + '';

        if (idFilter && !teacherId.includes(idFilter)) {
            return false;
        } if (nameFilter && !teacherName.includes(nameFilter)) {
            return false;
        } if (teacher.salary < salartFrom || teacher.salary > salaryTo) {
            return false;
        } if (form.subjects.length != 0 && !form.subjects.includes(teacher.subj)) {
            return false;
        } if (form.classes.length != 0 && !teacher.classes.some(item => form.classes.includes(item))) {
            return false;
        } if (form.degrees.length != 0 && !teacher.degree.some(item => form.degrees.includes(item))) {
            return false
        } 
        return true;
    })
    return <>
        <h2 className="tab-explain-heading">Click teachers to edit their profiles</h2>
        { RenderProfiles( teacherList.map(teacher => ({
                name: teacher.name, 
                id: 'Salary: ' + teacher.salary.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
        }))) }
        <TeacherFilter teacherForm={form} setTeacherForm={setForm} initialFormState={initialForm}/>
    </>
}
export function WorkerDetails(school, form, setForm, initialForm) {
    let workerList = school.workers;
    workerList = workerList.filter((worker => {
        const nameFilter = form.name.trim().toLowerCase();
        const wName = worker.name.trim().toLowerCase();
        if (nameFilter && !wName.includes(nameFilter)) {
            return false;
        }
        const salartFrom = form.minSal;
        const salaryTo = form.maxSal;
        if (worker.salary < salartFrom || worker.salary > salaryTo) {
            return false;
        }
        return true;
    }))
    return (<>
        <h2 className="tab-explain-heading">Click workers to edit their profiles</h2>
        { RenderProfiles(workerList.map(worker => ({
            name: worker.name,
            id: 'Salary: ' + worker.salary.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }),
            extra: [worker.post] || []
        }))) }
        <WorkerFilter form={form} setForm={setForm} initialForm={initialForm} />
    </>)
}

/* =====================================================================
        EXPENDITURE SECTION
===================================================================== */
export function StaffDetails(school, form, setForm, initialForm, popupBtn) {
    let workerList = school.workers;
    workerList = workerList.filter((worker => {
        const nameFilter = form.name.trim().toLowerCase();
        const wName = worker.name.trim().toLowerCase();
        if (nameFilter && !wName.includes(nameFilter)) {
            return false;
        }
        const salartFrom = form.minSal;
        const salaryTo = form.maxSal;
        if (worker.salary < salartFrom || worker.salary > salaryTo) {
            return false;
        }
        return true;
    }))
    return (<>
        <h2 className="tab-explain-heading">Click workers to edit their profiles</h2>
        { RenderProfiles(workerList.map(worker => ({
            name: worker.name,
            id: 'Salary: ' + worker.salary.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }),
            extra: [worker.post] || [], 
            func: () => popupBtn('staff_exp')
        }))) }
        <StaffFilter form={form} setForm={setForm} initialForm={initialForm} />
    </>)
}

export function StateSchoolsExpenditure(props) {
    const form = props.form;
    const popupBtn = props.popupBtn;
    let schools = props.schoolList.filter(school => {
        const nameFilter = form.name.trim().toLowerCase();
        const locationFilter = form.location.trim().toLowerCase()
        if (nameFilter && !school.name.trim().toLowerCase().includes(nameFilter)) {
            return false
        } if (locationFilter && !school.location.trim().toLowerCase().includes(locationFilter)) {
            return false
        } if (school.netIncome < form.minInc || school.netIncome > form.maxInc) {
            return false
        }
        return true;
    })
    return <>
        <h2 className="tab-explain-heading">Click schools to view their profiles</h2>
        <ul className="student-list" id="school-list">
            {schools.map((item, index) => (
                <SchoolProfile key={index} name={item.name} img='org-logo.png' id={item.id} netIncome={item.netIncome/3} location={item.location} expenditure func={() => popupBtn('school expenditure')}/>
            ))}
        </ul>
        <SchoolFilter form={props.form} setForm={props.setForm} initialForm={props.initialForm} />
    </>
}

export function CreditRequests(creditList) {
    return <>
    <h2 className="tab-explain-heading">Following schools are requesting for credit, Click to see details</h2>
    <ul className="credit-list">
        {creditList.map((item, index) => (<li onClick={() => alert('popup not implemented')}>
            <span>{item.school}</span>
            <span>{item.amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span>
            <BaseButton text='approve credit'/>
        </li>))}
    </ul>
    </>
}