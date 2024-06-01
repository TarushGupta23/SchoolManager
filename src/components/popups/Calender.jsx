import { useState } from "react";
import "./calender.css"

export default function Calender(props) {
    let date = new Date(),
        currYear = date.getFullYear(),
        currMonth = date.getMonth();
    const [selectedView, setSelectedView] = useState([currMonth, currYear]);
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    
    const renderDays = () => {
        let firstDayofMonth = new Date(selectedView[1], selectedView[0], 1).getDay(),
            lastDateofMonth = new Date(selectedView[1], selectedView[0] + 1, 0).getDate();
        let dates = [];
        for (let i = firstDayofMonth; i > 0; i--) {
            dates.push(-1);
        }
        for (let i = 1; i <= lastDateofMonth; i++) {
            dates.push(i);
        }
        return dates.map((val, idx) => {
            if (val === -1) {
                return <li key={idx} className="blankDate"></li>
            } else if (props.tags.red && props.tags.red.dates[selectedView[0]].includes(val)) {
                return <li key={idx} className="red">{val}</li>
            } else if (props.tags.yello && props.tags.yello.dates[selectedView[0]].includes(val)) {
                return <li key={idx} className="yello">{val}</li>
            } else if (props.tags.green && props.tags.green.dates[selectedView[0]].includes(val)) {
                return <li key={idx} className="green">{val}</li>
            }
            let isToday = (val === date.getDate() && selectedView[0] === new Date().getMonth() && selectedView[1] === new Date().getFullYear()) ? "active" : "";
            return <li key={idx} className={isToday}>{val}</li>
        })
    }

    const handleViewChange = (change) => {
        let [currMonth, currYear] = selectedView;
        currMonth = change === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        }
        setSelectedView([currMonth, currYear])
    }
    return (
        <div className="popup">
            <section id="calender-section">
                <h2 className="section-heading">{props.title}</h2>
                <div className="tab-content">
                    <div className="calender-wrapper">
                        <div className="header">
                            <p className="current-date">{months[selectedView[0]]} {selectedView[1]}</p>
                            <div className="icons">
                                <span className="calender-nav-icon" onClick={() => handleViewChange('prev')}>&lt;</span>
                                <span className="calender-nav-icon" onClick={() => handleViewChange('next')}>&gt;</span>
                            </div>
                        </div>
                        <div className="calendar-content">
                            <ul className="weeks">
                                <li>Sun</li>
                                <li>Mon</li>
                                <li>Tue</li>
                                <li>Wed</li>
                                <li>Thu</li>
                                <li>Fri</li>
                                <li>Sat</li>
                            </ul>
                            <ul className="days">
                                { renderDays() }
                            </ul>
                        </div>
                    </div>

                    <div className="calender-info">
                        <ul>
                            {
                                Object.entries(props.tags).map(([key, value]) => (
                                    <li><span className={key}></span> : {value.desc}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}