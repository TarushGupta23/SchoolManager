import SchoolProfile from "../../components/profile-item/SchoolProfile";
import SchoolFilter from "./filters/SchoolFilter";

function StateSchools(props) {
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

export {StateSchools}