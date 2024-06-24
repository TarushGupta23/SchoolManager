import BaseButton from "../../../components/Button/BaseButton"

export default function StaffSalary() {
    return (
        <div className="popup">
        <section>
            <h2 className="section-heading">XYZ Name</h2>
            <div className="tab-content">
                <div className="tab-buttons">
                    <BaseButton text='update data' />
                    <BaseButton text='view profile' func={()=>{
                        alert('staff profile not implemented, redirected to teacher profile')
                        window.open('/teacher', '_blank')
                    }} />
                </div>
                salary: <input type="number" value='20000' placeholder="Enter new salary" /> <br />
                post:
                <select>
                    <option selected>Manager</option>
                    <option>Senior Engineer</option>
                    <option>Junior Engineer</option>
                    <option>Worker</option>
                </select>
                <br />
                <i>(other editable things)</i>
            </div>
        </section>
        </div>
    )
}