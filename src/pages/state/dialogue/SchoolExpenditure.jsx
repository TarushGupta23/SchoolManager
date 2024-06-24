import BaseButton from "../../../components/Button/BaseButton"

export default function SchoolExpenditure() {
    return (
        <div className="popup">
        <section>
            <h2 className="section-heading">XYZ School Name, Location</h2>
            <div className="tab-content">
                <div className="tab-buttons">
                    <BaseButton text='update data' />
                    <BaseButton text='view profile' func={() => { window.open('/school', '_blank') }} />
                </div>
                <i>(some information about school)</i> <br />
            </div>
        </section>
        <section>
            <h2 className="section-heading">Expenditure Breakdown</h2>
            <div className="tab-content">
                <div className="tab-buttons">
                    <BaseButton text='credit history' />
                    <BaseButton text='provide credit' />
                </div>
                credit facilitated: ₹50,00,000.00 <br />
                date: 12/12/24 <br />
                credit request: none
            </div>
        </section>
        </div>
    )
}