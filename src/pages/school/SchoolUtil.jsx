import Bar from "../../components/BarGraph-Bar/Bar";
import WorkerFilter from "./Filters/WorkerFilter";
import TeacherFilter from "./Filters/TeacherFilter";
import StudentFilter from "./Filters/StudentFilter";
import BussFilter from "./Filters/BussFilter";
import ProfileBox from '../../components/profile-item/ProfileBox';
import db from '../../DB_conditions'
import Table from "../../components/table/Table";
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
function TeacherExpenditure(school, teacherForm, setTeacherForm, initialFormState, popUpBtn) {
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
        <div className="tab-buttons">
            <BaseButton text='collective update' func={() => popUpBtn('salary-updation', null)}/>
        </div>
        <h2 className="tab-explain-heading">Click teachers to edit their profiles</h2>
        {
            RenderProfiles( 
                teacherList.map(teacher => {
                    let func = () => { 
                        popUpBtn('teacher-salary', {name: teacher.name, salary: teacher.salary, inchrgeOf: null, classes: teacher.classes+'A'}) 
                    }
                    return {
                        name: teacher.name, 
                        id: `salary: ${teacher.salary.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}`,
                        func: func
                    }
            })) 
        }
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
        <div className="tab-buttons">
            <BaseButton text='update salary' />
        </div>
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
        <div className="tab-buttons">
            <BaseButton text='add goal' />
        </div>
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
    return <>
        <div className="tab-buttons">
            <BaseButton text='set costs' />
        </div>
        <h2 className="tab-explain-heading">Total expenditure cost: {actual_}</h2>
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
                FEE STRUCTURE
===================================================================== */
function OverallIncome(school, tab, setTab) {
    const classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '+1', '+2']
    let data = [['Class', 'Total Students', 'Income']];
    for (let classN of classes) {
        data.push([
            classN,
            school.students.reduce((sum, student) => ((student.class == classN)? sum + 1 : sum), 0),
            school.students.reduce((sum, student) => ((student.class == classN)? sum + student.fees : sum), 0).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
        ])
    }
    data.push([
        'Total',
        '-',
        school.students.reduce((sum, student) => (sum + student.fees), 0).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
    ])

    let busses = [['Buss No.', 'Driver', 'Total Students', 'Income']]
    for (let bus of school.busses) {
        busses.push([
            bus.busNo, bus.driver, bus.students, bus.income.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
        ])
    }
    busses.push([
        'Total', '-', '-', school.busses.reduce((sum, bus) => (sum + bus.income), 0).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
    ])


    return <>
        <h2 className="tab-explain-heading">Total Income: {school.totalIncome.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</h2>
        <div className="tableContainer">
            <Table table={(tab==='classes')?data:busses} />
        </div>
        <div className="tab-content-nav">
            <li className={tab==='classes'? "tab-content-btn tab-content-selected" : 'tab-content-btn'} onClick={() => setTab('classes')}>Classes</li>
            <li className={tab==='busses'? "tab-content-btn tab-content-selected" : 'tab-content-btn'} onClick={() => setTab('busses')}>Busses</li>
        </div>
    </>
}
function TutionFee(school, form, setForm, initialForm) {
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
            id: `${student.class} ${student.section}`,
            extra: [`Fees: ${student.fees.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}`]
        }))) }
        <StudentFilter form={form} setForm={setForm} initialForm={initialForm}/>
    </>
}
function BusFee(school, form, setForm, initialForm) {
    let studentList = school.students.filter(student => {
        if (!student.busNo) { return false }
        const nameFilter = form.name.trim().toLowerCase();
        const admissionNo = form.admissionNo.trim().toLowerCase();
        const driver = school.busses.find(bus => student.busNo === bus.busNo).driver
        if (nameFilter && !student.name.trim().toLowerCase().includes(nameFilter)) {
            return false
        } if (admissionNo && !(student.admissionNo + '').trim().toLowerCase().includes(admissionNo)) {
            return false
        } if (form.classes.length != 0 && !form.classes.includes(student.class)) {
            return false
        } if (form.sections.length != 0 && !form.sections.includes(student.section)) {
            return false
        } if (form.buses.length != 0 && !form.buses.includes(student.busNo)) {
            return false
        } if (form.drivers.length != 0 && !form.drivers.includes(driver)) {
            return false
        }
        return true;
    })
    return <>
        <h2 className="tab-explain-heading">Click students to edit their profiles</h2>
        { RenderProfiles(studentList.map(student => ({
            name: student.name,
            id: `Buss No: ${student.busNo}`,
            extra: [`Bus Fee: ${student.fees.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}`]
        }))) }
        <BussFilter form={form} setForm={setForm} initialForm={initialForm}/>
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

export { overallExpenditure, TeacherExpenditure, WorkerExpenditure, Goals, StudentDetails, InfrastructureExpenditure, TeacherDetails, WorkerDetails, TutionFee, OverallIncome, BusFee }