import BaseButton from "../../../components/Button/BaseButton"

export default function GeneralSalaryUpdate() {
    return <div className="popup">
        <section>
            <h2 className="section-heading">update salary</h2>
            <div className="tab-content">
                <div className="tab-buttons">
                    <BaseButton text='update' />
                    <BaseButton text='view profile' func={()=>{window.open('/teacher', '_blank')}}/>
                </div>
                <h2 className="tab-explain-heading">
                    NOTE: only filtered teachers/workers will recieve salary update
                </h2>
                <form action="">
                    change to: <input type="number" placeholder="Salary" value='0' /> (this will set the salary to provided amount) <br />
                    increase by: <input type="number" placeholder="Amount" value='0' /> (this will increase the slary by given amount) <br />
                </form>
            </div>
        </section>
    </div>
}