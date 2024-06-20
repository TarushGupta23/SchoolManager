import Button from "../../../components/Button/BaseButton"
import './style.css'
export default function InfrastructureTarget() {
    const addItem = () => {
        window.prompt('title of target')
        window.prompt('budget of target')
        alert('code to add item is not implemented')
    }
    return <div className="popup infrastru-popup">
        <section>
            <h2 className="section-heading">Update costs made on infrastructure</h2>
                <div className="tab-content">
                    <div className="tab-buttons">
                        <Button text='add item' func={addItem} />
                    </div>
                    <ul>
                        <li><img src="images/delete.png" alt="" className="deleteIcon" onClick={() => window.confirm('do you want to delete this?')} />white wash: <input type="text" placeholder="cost" value='2,00,000' /></li>
                        <li><img src="images/delete.png" alt="" className="deleteIcon" onClick={() => window.confirm('do you want to delete this?')} />class repairs <input type="text" placeholder="cost" value='3,00,000' /></li>
                        <li><img src="images/delete.png" alt="" className="deleteIcon" onClick={() => window.confirm('do you want to delete this?')} />water tank cleaning <input type="text" placeholder="cost" value='1,40,000' /></li>
                    </ul>
            </div>
        </section>
    </div>
}