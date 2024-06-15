import Button from "../../../components/Button/BaseButton";
export default function SchoolFilter(props) {
    const {form, setForm, initialForm} = props;
    return <form id="school-filter" className="form-filter">
        <h2 className="tab-explain-heading">Filter Schools
            <span> <Button text="Clear Filter" func={() => { setForm(initialForm) }} /> </span>
        </h2>
        <div className="form-group">
            <div>
                <h4>Filter by Name</h4>
                <input type="text" name="name" value={form.name} placeholder="Search Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <h4>Income Range:</h4>
                <span className="range-span">
                    <input type="number" name="name" value={form.minInc} placeholder="Income From" onChange={(e) => setForm({ ...form, minInc: parseInt(e.target.value) })} />
                    <input type="number" name="name" value={form.maxInc} placeholder="Income To" onChange={(e) => setForm({ ...form, maxInc: parseInt(e.target.value) })} />
                </span>
                <h4>Filter by Location:</h4>
                <input type="text" name="name" value={form.location} placeholder="Search Name" onChange={(e) => setForm({ ...form, location: e.target.value })} />
            </div>
        </div>
    </form>
}