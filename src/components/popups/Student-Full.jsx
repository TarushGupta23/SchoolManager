import "./student-full.css"
import ProfileBox from "../profile-item/ProfileBox";

export default function StudentFull(props) {
    const student = props.student;
    return (
        <div className="popup">
            <section>
                <div id="student-info">
                    <div className="info-right">
                        <div className="info-r-top">
                            <span>{student.name}</span>
                            <span><strong>Admission No: </strong>{student['Admission No']}</span>
                        </div>
                        <div className="info-r-bottom">
                            <span><strong>Roll No:</strong> {student.rollNo}</span>
                            <span>{student.class.class} {student.class.section}</span>
                            <span><strong>Group:</strong> {student.group.name}</span>
                        </div>
                        <br />
                        <div className="info-bottom">
                            <address><strong>Address:</strong> {student.address}</address>
                            <div>
                                <span><strong>DOB:</strong> {student.dob.toLocaleDateString()}</span> <span><strong>Gender:</strong> {student.gender}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="student-parents">
                <h2 className="section-heading">Parents/Guardians</h2>
                <div className="tab-content">
                    <ul>
                        {
                            student.parents.map((parent, index) => (
                                <li key={index}>
                                    <h3>{parent.name} <span>({parent.relation})</span> </h3>
                                    <p>
                                        <b>Contact :</b> {parent.contact}<br />
                                        <b>Income :</b> {parent.income}<br />
                                        <b>Occupation :</b> {parent.occupation}<br />
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>

            <section className="student-siblings">
                <h2 className="section-heading">Siblings</h2>
                <div className="tab-content student-parents-container">
                    <ul className="student-list">
                        {
                            student.siblings.map((sibling, index) => (<ProfileBox name={sibling.name} id={sibling.admissionNo} img={sibling.pic} key={index} />))
                        }
                    </ul>
                </div>
            </section>
        </div>
    )
}