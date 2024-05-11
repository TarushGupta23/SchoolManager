import "./class-notice.css"
import Button from "../Button/BaseButton"
export default function ClassNotice() {
    return (
    <div className="popup">
        <section id='class-notice-section'>
        <h2 className="section-heading">Notice</h2>
        <div className="tab-content">
            <textarea placeholder="Enter Notice Content"></textarea>
            <div>
                <label htmlFor="">Ending Date</label> <input type="date" name="enter expiration date" required/>
                <span><Button text="Submit" /></span>
            </div>
        </div>
        </section>
    </div>
    )
}