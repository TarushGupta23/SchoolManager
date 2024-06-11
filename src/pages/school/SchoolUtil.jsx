import Bar from "../../components/BarGraph-Bar/Bar";
import WorkerFilter from "../../components/Filters/WorkerFilter";
import TeacherFilter from "../../components/Filters/TeacherFilter";
import StudentFilter from "../../components/Filters/StudentFilter";
import ProfileBox from '../../components/profile-item/ProfileBox';
import db from '../../DB_conditions'

function RenderProfiles(profileList) {
    return <ul className="student-list">
        {profileList.map((item, index) => (
            <ProfileBox key={index} name={item.name} img='person1.png' id={item.id} />
        ))}
    </ul>
}
/* =====================================================================
                EXPENDITURE TABS
===================================================================== */
const overallExpenditure = (school) => {
    const headings = ['totalTeacherSalary', 'totalWorkerSalary', 'infrastructure', 'savings']
    const mappedHeadings = ['teachers', 'workers', 'infrastructure', 'savings']
    let data = [];
    data = headings.map((heading, idx) => ({
        val: school[heading],
        maxVal: school.totalIncome,
        title: mappedHeadings[idx],
        desc: ""
    }))

    return (<>
        <h2 className="tab-explain-heading">Total Income: {school.totalIncome.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</h2>
        <div className="bar-graph">
            <ul>
                {data.map((info, index) => (
                    <Bar info={info} key={index} minVal={0} moneyGraph color="green"/>
                ))}
            </ul>
        </div>
    </>)
}
function TeacherExpenditure(school, teacherForm, setTeacherForm, initialFormState) {
    let teacherList = school.teachers;
    teacherList = teacherList.filter((teacher) => {
        const nameFilter = teacherForm.name.trim().toLowerCase();
        const teacherName = teacher.name.trim().toLowerCase();
        const salartFrom = teacherForm.minSal;
        const salaryTo = teacherForm.maxSal;
        const idFilter = teacherForm.oasisNo.trim().toLowerCase();
        const teacherId = teacher.oasisNo + '';

        if (idFilter && !teacherId.includes(idFilter)) {
            return false;
        } if (nameFilter && !teacherName.includes(nameFilter)) {
            return false;
        } if (teacher.salary < salartFrom || teacher.salary > salaryTo) {
            return false;
        } if (teacherForm.subjects.length != 0 && !teacherForm.subjects.includes(teacher.subj)) {
            return false;
        } if (teacherForm.classes.length != 0 && !teacher.classes.some(item => teacherForm.classes.includes(item))) {
            return false;
        } if (teacherForm.degrees.length != 0 && !teacher.degree.some(item => teacherForm.degrees.includes(item))) {
            return false
        } 
        return true;
    })
    return (<>
        <h2 className="tab-explain-heading">Click teachers to edit their profiles</h2>
        { RenderProfiles( teacherList.map(teacher => ({
                name: teacher.name, 
                id: `salary: ${teacher.salary.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}`
        }))) }
        <TeacherFilter teacherForm={teacherForm} setTeacherForm={setTeacherForm} initialFormState={initialFormState}/>
    </>)
}
function WorkerExpenditure(school, form, setForm, initialForm) {
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
            id: `salary: ${worker.salary.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}`
        }))) }
        <WorkerFilter form={form} setForm={setForm} initialForm={initialForm} />
    </>)
}
function Goals(goals, savings) {
    return <>
        <h2 className="tab-explain-heading">Total Savings {savings.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</h2>
        <div className="bar-graph">
            <ul>
                {goals.map((goal, index) => {
                    let info = {
                        val: goal.budget,
                        maxVal: savings,
                        title: goal.txt,
                        desc: "",
                    }
                    return <Bar info={info} key={index} minVal={0} moneyGraph color="green"/>
                })}
            </ul>
        </div>
    </>
}
function InfrastructureExpenditure(expList) {
    let actual_ = 3_00_000
    let val1 = 1_000
    return <>
        <h2 className="tab-explain-heading">Expected: {val1}, Actual: {actual_}</h2>
        <div className="bar-graph">
            <ul>
                {expList.map((expenditure, index) => {
                    let info = {
                        val: expenditure.cost,
                        maxVal: actual_,
                        title: expenditure.desc
                    }
                    return <Bar info={info} key={index} minVal={0} moneyGraph color="green" />
                })}
            </ul>
        </div>
    </>
}

/* =====================================================================
                STAFF AND STUDENT DETAILS
===================================================================== */
function StudentDetails(school, form, setForm, initialForm) {
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
            id: `${student.class} ${student.section}`
        }))) }
        <StudentFilter form={form} setForm={setForm} initialForm={initialForm}/>
    </>
}
function TeacherDetails(school, form, setForm, initialForm) {
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
                id: 'ID: ' + teacher.oasisNo
        }))) }
        <TeacherFilter teacherForm={form} setTeacherForm={setForm} initialFormState={initialForm}/>
    </>
}
function WorkerDetails(school, form, setForm, initialForm) {
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
            id: ''
        }))) }
        <WorkerFilter form={form} setForm={setForm} initialForm={initialForm} />
    </>)
}

export { overallExpenditure, TeacherExpenditure, WorkerExpenditure, Goals, StudentDetails, InfrastructureExpenditure, TeacherDetails, WorkerDetails }