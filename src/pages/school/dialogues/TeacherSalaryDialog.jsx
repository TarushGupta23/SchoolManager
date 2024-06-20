import BaseButton from "../../../components/Button/BaseButton"

export default function TeacherSalaryDialog(props) {
    const {name, salary, inchargeOf, classes} = props.teacher
    return <div className="popup">
        <section>
            <h2 className="section-heading">{name}</h2>
            <div className="tab-content">
                <div className="tab-buttons">
                    <BaseButton text='update data' />
                    <BaseButton text='view profile' func={()=>{window.open('/teacher', '_blank')}}/>
                </div>
                <form action="">
                    Salary: <input type="text" placeholder="Salary" value={salary} /> <br />
                    classes: <i>Section to edit what classes taken by teacher</i><br />
                    Incharge Of: <i>section to change teachers position as class incharge</i><br />
                    Time Table: <i>section to edit teacher's time table</i><br />
                </form>
            </div>
        </section>
    </div>
}