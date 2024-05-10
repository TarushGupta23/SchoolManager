import Button from "../../components/Button/BaseButton";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import "./teacher.css"

export default function Teacher(props) {
    const teacher = props.teacher
    return (
        <>
            <section id="teacher-info">
                <div className="info-left">
                    <ProfileImage location='person1.png' />
                </div>
                <div className="info-right">
                    <div className="info-r-top">
                        {teacher.name} <Button text="Details" />
                    </div>
                    <div className="info-r-bottom">
                        {teacher.inchargeOf != null && (<>
                            <span>incharge of {teacher.inchargeOf.class} {teacher.inchargeOf.section}</span>
                            <div>
                                <Button text="Upload Attendence"/>
                                <Button text="Update Class Data"/>
                            </div>
                        </>)}
                    </div>
                </div>
            </section>

            <section id="notice-board">
                <h2 className="section-heading">Notice Board</h2>
                <div className="notice-content tab-content">
                    <ul>
                        <li>hello this is Notice 1</li>
                        <li>hello this is Notice 2</li>
                        <li>hello this is Notice 3</li>
                        <li>hello this is Notice 4</li>
                    </ul>
                </div>
            </section>

            <section id="classes-section">
                <h2 className="section-heading">Students</h2>
                <div className="tab-container">
                    <ul>
                        <div className="tab tab-selected"><a href="#">Class 1A</a></div>
                        <div className="tab"><a href="#">Class 2A</a></div>
                        <div className="tab"><a href="#">Class 1B</a></div>
                    </ul>
                </div>
                <div className="tab-content">
                    <h2 className="tab-explain-heading">NOTE: only filtered students will receive HW</h2>
                    <div className="tab-buttons">
                        <button className="basic-btn">Assign HW</button>
                        <button className="basic-btn">Upload Marks</button>
                    </div>
                    <ul className="student-list">
                        <li>
                            <div className="info-left profile-img-container">
                                <img src="" alt="" className="profile-img" />
                            </div>
                            <div className="info-right">
                                <div className="info-r-top"> Std Name </div>
                                <div className="info-r-bottom"> Std roll </div>
                            </div>
                        </li>
                    </ul>
                    <form action="" id="student-filter">
                        <h2 className="tab-explain-heading">Filter Students
                            <span>
                                <button className="basic-btn" type="reset">Clear Filter</button>
                                <button className="basic-btn" type="submit">Apply Filter</button>
                            </span>
                        </h2>
                        <div className="form-group">
                            <div>
                                <h4>Filter by Roll Number or Name </h4>
                                <input type="text" name="name" value="" placeholder="Search Name or Roll Number" />
                                <span>
                                    <h4>Roll number range:</h4>
                                    <input type="number" name="name" value="" placeholder="Roll no. From" />
                                    <input type="number" name="name" value="" placeholder="Roll no. To" />
                                </span>
                            </div>
                            <div className="form-checkbox">
                                <h4>Filter by Group</h4>
                                <p>
                                    <span><input type="checkbox" name="" id="" />Group 1</span>
                                    <span><input type="checkbox" name="" id="" />Group 2</span>
                                    <span><input type="checkbox" name="" id="" />Group 3</span>
                                    <span><input type="checkbox" name="" id="" />Group 4</span>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <section id="timetable-section">
                <h2 className="section-heading">Time Table</h2>
                <div className="tab-content">
                    <table className="time-table">
                        <tr>
                            <th>Period</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                        </tr>
                        <tr>
                            <td>Monday</td>
                            <td>2A</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>2A</td>
                            <td>2A</td>
                            <td>2A</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>2A</td>
                            <td>2A</td>
                            <td>2A</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>2A</td>
                            <td>2A</td>
                            <td>2A</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>2A</td>
                            <td>2A</td>
                            <td>2A</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>2A</td>
                            <td>2A</td>
                            <td>2A</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </table>
                </div>
            </section>
        </>
    )
}