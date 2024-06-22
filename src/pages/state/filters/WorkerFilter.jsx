import Button from "../../../components/Button/BaseButton";
export default function WorkerFilter(props) {
    const {initialForm, form, setForm} = props;
    const schoolList = ['DAV, Ludhiana', 'Ryan International School, Patiala', 'KVM, Kitchlu Nagar', 'Greenland, abc location']
    
    return <form id="worker-filter" className="form-filter">
        <h2 className="tab-explain-heading">Filter Workers
            <span> <Button text="Clear Filter" func={() => { setForm(initialForm) }} /> </span>
        </h2>
        <div className="form-group">
            <div>
                <h4>Filter by Name</h4>
                <input type="text" name="name" value={form.name} placeholder="Search Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <h4>Salary Range:</h4>
                <span className="range-span">
                    <input type="number" name="name" value={form.minSal} placeholder="Salary From" onChange={(e) => setForm({ ...form, minSal: parseInt(e.target.value) })} />
                    <input type="number" name="name" value={form.maxSal} placeholder="Salary To" onChange={(e) => setForm({ ...form, maxSal: parseInt(e.target.value) })} />
                </span>

                <h4> Select School &nbsp;
                    <select>
                        {schoolList.map((school) => (
                            <option key={school}>{school}</option>
                        ))}
                    </select>
                </h4>
            </div>
        </div>
    </form>
}