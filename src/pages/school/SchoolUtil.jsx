import Bar from "../../components/BarGraph-Bar/Bar";
import WorkerFilter from "../../components/Filters/WorkerFilter";
import TeacherFilter from "../../components/Filters/TeacherFilter";

const overallExpenditure = (school) => {
    const headings = ['totalTeacherSalary', 'totalWorkerSalary', 'infrastructure', 'savings']
    const mappedHeadings = ['teachers', 'workers', 'staff', 'savings']
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
    
    return (<>
        <ul className="profile-list">
            {/* Teacher list */}
        </ul>
        <TeacherFilter teacherForm={teacherForm} setTeacherForm={setTeacherForm} initialFormState={initialFormState}/>
        
    </>)
}
function WorkerExpenditure(school, form, setForm, initialForm) {
    return (<>
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
export {overallExpenditure, TeacherExpenditure, WorkerExpenditure, Goals}