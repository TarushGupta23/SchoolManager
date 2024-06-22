import Button from "../../../components/Button/BaseButton";
export default function TeacherFilter(props) {
    const {initialFormState, teacherForm, setTeacherForm} = props;
    
    const classList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '+1 Non Medical', '+2 Non Medical', '+1 Commerce', '+2 Commerce', '+1 Medical', '+2 Medical']
    const subjList = ['maths', 'punjabi', 'hindi', 'english', 'science', 'sst', 'arts', 'sports']
    const degreeList = ['M. tech', 'B. tech']
    const schoolList = ['All', 'DAV, Ludhiana', 'Ryan International School, Patiala', 'KVM, Kitchlu Nagar', 'Greenland, abc location']

    let teacherDropDown = teacherForm.teacherDropDown;
    let subjects = teacherForm.subjects;
    let classes = teacherForm.classes;
    let degrees = teacherForm.degrees;
    return <form id="teacher-filter" className="form-filter">
        <h2 className="tab-explain-heading">Filter Teachers
            <span>
                <Button text="Clear Filter" func={() => { setTeacherForm(initialFormState) }} />
            </span>
        </h2>
        <div className="form-group">
            <div>
                <h4>Filter by Name</h4>
                <input type="text" name="name" value={teacherForm.name} placeholder="Search Name" onChange={(e) => setTeacherForm({ ...teacherForm, name: e.target.value })} />
                <h4>Salary Range:</h4>
                <span className="range-span">
                    <input type="number" name="name" value={teacherForm.minSal} placeholder="Salary From" onChange={(e) => setTeacherForm({ ...teacherForm, minSal: parseInt(e.target.value) })} />
                    <input type="number" name="name" value={teacherForm.maxSal} placeholder="Salary To" onChange={(e) => setTeacherForm({ ...teacherForm, maxSal: parseInt(e.target.value) })} />
                </span>
                <h4>Search By CBSE OASIS No</h4>
                <input type="number" name='name' value={teacherForm.oasisNo} placeholder="Search OASIS No" onChange={(e) => setTeacherForm({ ...teacherForm, oasisNo: e.target.value })} />
            </div>
            <div>
                <h4> Select School &nbsp;
                    <select>
                        {schoolList.map((school) => (
                            <option key={school}>{school}</option>
                        ))}
                    </select>
                </h4>

                <h4 onClick={() => setTeacherForm({ ...teacherForm, teacherDropDown: [!teacherDropDown[0], false, false] })}>
                    Subject Filter &nbsp;<img src="/images/down-arrow.png" alt="" className={!teacherDropDown[0] && 'icon-rotated'} />
                </h4>
                <span className="relative">
                    <div className={!teacherDropDown[0] && "hidden"}>
                        {subjList.map((subj) => (
                            <li id={subj}>
                                <input type="checkbox" checked={teacherForm.subjects.includes(subj)}
                                    onChange={(e) => {
                                        if (subjects.includes(subj)) {
                                            subjects = subjects.filter(item => item !== subj);
                                        } else {
                                            subjects.push(subj)
                                        }
                                        setTeacherForm({ ...teacherForm, subjects: subjects })
                                    }}
                                />
                                {subj}
                            </li>
                        ))}
                    </div>
                </span>

                <h4 onClick={() => setTeacherForm({ ...teacherForm, teacherDropDown: [false, !teacherDropDown[1], false] })}>
                    Class Filter &nbsp;<img src="/images/down-arrow.png" alt="" className={!teacherDropDown[1] && 'icon-rotated'} />
                </h4>
                <span className="relative">
                    <div className={!teacherDropDown[1] && "hidden"}>
                        {classList.map((classN) => (
                            <li id={classN}>
                                <input type="checkbox" checked={teacherForm.classes.includes(classN)}
                                    onChange={() => {
                                        if (classes.includes(classN)) {
                                            classes = classes.filter(item => item !== classN)
                                        } else {
                                            classes.push(classN)
                                        }
                                        setTeacherForm({ ...teacherForm, classes: classes })
                                    }}
                                />
                                {classN}
                            </li>
                        ))}
                    </div>
                </span>

                <h4 onClick={() => setTeacherForm({ ...teacherForm, teacherDropDown: [false, false, !teacherDropDown[2]] })}>
                    Degree Filter &nbsp;<img src="/images/down-arrow.png" alt="" className={!teacherDropDown[2] && 'icon-rotated'} />
                </h4>
                <span className="relative">
                    <div className={!teacherDropDown[2] && "hidden"}>
                        {degreeList.map((degree) => (
                            <li id={degree}>
                                <input type="checkbox" checked={teacherForm.degrees.includes(degree)}
                                    onChange={() => {
                                        if (degrees.includes(degree)) {
                                            degrees = degrees.filter(item => item !== degree)
                                        } else {
                                            degrees.push(degree)
                                        }
                                        setTeacherForm({ ...teacherForm, degrees: degrees })
                                    }}
                                />
                                {degree}
                            </li>
                        ))}
                    </div>
                </span>
            </div>
        </div>
    </form>
}