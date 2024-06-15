import Button from "../../../components/Button/BaseButton";
export default function BussFilter(props) {
    const {form, setForm, initialForm} = props;
    const bussesList = [4, 5, 6, 7, 8, 9, 10, 11, 12]
    const bussDriversList = ['abc', 'def', 'ghi', 'jkl', 'qwerty', 'asjad', 'aamil', 'akshit', 'himanshu', 'nirman', 'rhythm']
    const classList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '+1', '+2']
    const sectionList = ['A', 'B', 'C', 'D', 'E', 'Non Medical', 'Medical', 'Commerce']

    const dropDown = form.dropDown;
    let classes = form.classes, sections = form.sections, busses = form.buses, drivers = form.drivers;

    return <form id="worker-filter" className="form-filter">
        <h2 className="tab-explain-heading">Filter Students
            <span> <Button text="Clear Filter" func={() => { setForm(initialForm) }} /> </span>
        </h2>
        <div className="form-group">
            <div>
                <h4>Filter by Name</h4>
                <input type="text" name="name" value={form.name} placeholder="Search Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <h4>Search Admission No.</h4>
                <input type="number" name="name" value={form.admissionNo} placeholder="Admission No" onChange={(e) => setForm({ ...form, admissionNo: e.target.value })} />
                {/* <h4>Fees Range</h4>
                <span className="range-span">
                    <input type="number" placeholder="Fees From" value={form.fees[0]} onChange={(e) => setForm({...form, fees: [e.target.value, form.fees[1]]})} />
                    <input type="number" placeholder="Fees To" value={form.fees[1]}  onChange={(e) => setForm({...form, fees: [form.fees[0], e.target.value]})}/>
                </span> */}
            </div>
            <div>
                <ul className="horizontal">
                    <li>
                        <h4 onClick={() => setForm({ ...form, dropDown: [!dropDown[0], dropDown[1], false, false] })}>
                            Class &nbsp;<img src="/images/down-arrow.png" alt="" className={!dropDown[0] && 'icon-rotated'} />
                        </h4>
                        <span className="relative">
                            <div className={!dropDown[0] && "hidden"}>
                                {classList.map((classN) => (
                                    <li id={classN}>
                                        <input type="checkbox" checked={form.classes.includes(classN)}
                                            onChange={(e) => {
                                                if (classes.includes(classN)) {
                                                    classes = classes.filter(item => item !== classN);
                                                } else {
                                                    classes.push(classN)
                                                }
                                                setForm({ ...form, classes: classes })
                                            }}
                                        />
                                        {classN}
                                    </li>
                                ))}
                            </div>
                        </span>
                    </li>
                    <li>
                        <h4 onClick={() => setForm({ ...form, dropDown: [dropDown[0], !dropDown[1], false, false] })}>
                            Section &nbsp;<img src="/images/down-arrow.png" alt="" className={!dropDown[1] && 'icon-rotated'} />
                        </h4>
                        <span className="relative">
                            <div className={!dropDown[1] && "hidden"}>
                                {sectionList.map((classN) => (
                                    <li id={classN}>
                                        <input type="checkbox" checked={form.sections.includes(classN)}
                                            onChange={(e) => {
                                                if (sections.includes(classN)) {
                                                    sections = sections.filter(item => item !== classN);
                                                } else {
                                                    sections.push(classN)
                                                }
                                                setForm({ ...form, sections: sections })
                                            }}
                                        />
                                        {classN}
                                    </li>
                                ))}
                            </div>
                        </span>
                    </li>
                </ul>
                <ul className="horizontal">
                    <li>
                        <h4 onClick={() => setForm({ ...form, dropDown: [false, false, !dropDown[2], dropDown[3]] })}>
                            Buss Number &nbsp;<img src="/images/down-arrow.png" alt="" className={!dropDown[2] && 'icon-rotated'} />
                        </h4>
                        <span className="relative">
                            <div className={!dropDown[2] && "hidden"}>
                                {bussesList.map((bus) => (
                                    <li id={bus}>
                                        <input type="checkbox" checked={form.buses.includes(bus)}
                                            onChange={(e) => {
                                                if (busses.includes(bus)) {
                                                    busses = busses.filter(item => item !== bus);
                                                } else {
                                                    busses.push(bus)
                                                }
                                                setForm({ ...form, buses: busses })
                                            }}
                                        />
                                        {bus}
                                    </li>
                                ))}
                            </div>
                        </span>
                    </li>
                    <li>
                        <h4 onClick={() => setForm({ ...form, dropDown: [false, false, dropDown[2], !dropDown[3]] })}>
                            Driver Name &nbsp;<img src="/images/down-arrow.png" alt="" className={!dropDown[3] && 'icon-rotated'} />
                        </h4>
                        <span className="relative">
                            <div className={!dropDown[3] && "hidden"}>
                                {bussDriversList.map((driver) => (
                                    <li id={driver}>
                                        <input type="checkbox" checked={form.drivers.includes(driver)}
                                            onChange={(e) => {
                                                if (drivers.includes(driver)) {
                                                    drivers = drivers.filter(item => item !== driver);
                                                } else {
                                                    drivers.push(driver)
                                                }
                                                setForm({ ...form, drivers: drivers })
                                            }}
                                        />
                                        {driver}
                                    </li>
                                ))}
                            </div>
                        </span>
                    </li>
                </ul>
                {/* <h4>Filter by Group</h4>
                <div className="form-checkbox">
                    <p>
                        {db.groups.map((grp, index) => (
                            <span key={index}>
                                <input 
                                    type="checkbox" 
                                    name={grp} 
                                    id={grp} 
                                    checked={form.group[index]} 
                                    onChange={(e) => {
                                        const updatedGroups = [...form.group];
                                        updatedGroups[index] = e.target.checked;
                                        setForm({ ...form, group: updatedGroups });
                                    }}
                                />
                                {grp}
                            </span>
                        ))}
                    </p>
                </div> */}
            </div>
        </div>
    </form>
}