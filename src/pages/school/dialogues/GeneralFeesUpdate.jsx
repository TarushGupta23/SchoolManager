import BaseButton from "../../../components/Button/BaseButton"

export default function GeneralFeesUpdate() {
    return <div className="popup">
        <section>
            <h2 className="section-heading">update fees</h2>
            <div className="tab-content">
                <div className="tab-buttons">
                    <BaseButton text='update' />
                    <BaseButton text='view profile' func={()=>{window.open('/student', '_blank')}}/>
                </div>
                <h2 className="tab-explain-heading">
                    NOTE: only filtered students will recieve salary update
                </h2>
                <form action="">
                    change to: <input type="number" placeholder="Salary" value='0' /> (this will set the fees to provided amount) <br />
                    increase by: <input type="number" placeholder="Amount" value='0' /> (this will increase the fees by given amount) <br />
                </form>
            </div>
        </section>
    </div>
}