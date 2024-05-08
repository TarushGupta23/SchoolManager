import "./student.css"
import Button from "./../../components/Button/BaseButton";
import Bar from "./../../components/BarGraph-Bar/Bar";

export default function Student(props) {
    const student = props.student;
    return (
        <>
            <section id="student-info">
                <div className="info-left profile-img-container">
                    <img src="" alt="" className="profile-img" />
                </div>
                <div className="info-right">
                    <div className="info-r-top"> {student.name} </div>
                    <div className="info-r-bottom">
                        <span>Roll No: {student.rollNo}</span>
                        <span>{student.class.class} {student.class.section}</span>
                        <Button text="Details" />
                    </div>
                </div>
            </section>


            <section id="student-homework">
                <h2 className="section-heading">Homework</h2>
                <div className="tab-container">
                    <ul>
                        <div className="tab tab-selected"><a href="#">All</a></div>
                        <div className="tab"><a href="#">Subj 1</a></div>
                        <div className="tab"><a href="#">Subj 2</a></div>
                        <div className="tab"><a href="#">Subj 3</a></div>
                    </ul>
                </div>
                <div className="homework-content tab-content">
                    <ul>
                        <li>hello this is home work 1</li>
                        <li>hello this is home work 2</li>
                        <li>hello this is home work 3</li>
                        <li>hello this is home work 4</li>
                    </ul>
                </div>
            </section>


            <section id="student-grades">
                <h2 className="section-heading">Grades</h2>
                <div className="tab-container">
                    <ul>
                        <div className="tab tab-selected"><a href="#">Final Exams</a></div>
                        <div className="tab"><a href="#">class Tests</a></div>
                        <div className="tab"><a href="#">Mid Sem</a></div>
                        <div className="tab"><a href="#">Assignments</a></div>
                    </ul>

                </div>
                <div className="grades-content tab-content">
                    <div className="tab-buttons">
                        <Button text="Detailed Report" />
                        <Button text="Progress"/>
                    </div>
                    {/* <!-- TODO: bar graph --> */}
                    <h2 className="tab-explain-heading">Tell what is happening here</h2>
                    <div className="bar-graph">
                        <ul>
                            {/* {student.marks.map(marks => {
                                return <Bar marks={student.marks} />
                            })} */}
                        </ul>
                    </div>

                    <div className="tab-content-nav">
                        <li className="tab-content-btn tab-content-selected">All</li>
                        {/* <!-- TODO: all subjects --> */}
                        <li className="tab-content-btn">Subj 1</li>
                        <li className="tab-content-btn">Subj 2</li>
                        <li className="tab-content-btn">Subj 3</li>
                        <li className="tab-content-btn">Subj 3</li>
                    </div>
                </div>
            </section>


            <section id="student-attendence">
                <h2 className="section-heading">Attendance</h2>
                <div className="tab-content attendence-content">
                    <div className="tab-buttons">
                        <button className="basic-btn">View Time Table</button>
                        <button className="basic-btn">Calender View</button>
                    </div>
                    <ul className="grid-box" style={{ '--item-width': '150px' }}>
                        {/* <!-- TODO:  loop through data and create elements dynamically --> */}
                        {/* <PieChart /> */}
                        <li className="attendence-box" style={{ '--item-width': '150px' }}>
                            <div className="pie-chart green" style={{ '--percent-val': '90%'}}>
                                90%
                                <div className="pie-title">subj 1</div>
                            </div>
                        </li>
                        {/* <li className="attendence-box" style="--item-width: 150px;">
                            <div className="pie-chart red" style="--percent-val: 20%;">
                                20%
                                <div className="pie-title">subj 1</div>
                            </div>
                        </li>
                        <li className="attendence-box" style="--item-width: 150px;">
                            <div className="pie-chart yello" style="--percent-val: 70%;">
                                70%
                                <div className="pie-title">subj 1</div>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </section>


            <section id="student-ana-record">
                <h2 className="section-heading">Anecdotal Record</h2>
                <div className="anac-content tab-content">
                    <ul>
                        {/* <!-- TODO: add homework --> */}
                        <li>hello this is home work 1</li>
                        <li>hello this is home work 2</li>
                        <li>hello this is home work 3</li>
                        <li>hello this is home work 4</li>
                    </ul>
                </div>
            </section>
        </>
    )
}