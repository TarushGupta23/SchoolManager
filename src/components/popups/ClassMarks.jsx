import { useState } from "react"
import "./class-marks.css"
import Button from "../Button/BaseButton";

export default function ClassMarks(props) {
    const classList = props.classList;
    const [marksList, setMarksList] = useState(classList.map(() => 0));

    return (
        <div className="popup">
            <section>
                <h2 className="section-heading">Upload Marks</h2>
                <div className="tab-content">
                    <div className="tab-buttons">
                        <Button text="Upload" />
                    </div>
                    <div id="test-info">
                        <div>
                            Subject: 
                            <select id="selectOption" name="selectOption">
                                {/* TODO: render subjects according to class */}
                                {/* TODO: handle things for vocational subjects!! */}
                                <option value="option1">Hindi</option>
                                <option value="option1">English</option>
                                <option value="option1">Punjabi</option>
                            </select>
                            Category:
                            <select id="selectOption" name="selectOption">
                                <option value="option1">Final Exam</option>
                                <option value="option1">Mid Term</option>
                            </select>
                            Test Name: <input type="text" placeholder="Enter Test Name" required />
                            Total Marks: <input type="number" placeholder="Enter Maximum Marks" required />
                        </div>
                        Sllyabus: <textarea name="" id="" placeholder="Enter Sllyabus"></textarea>
                    </div>
                    
                    <ul>
                        { classList.map((student, index) => (
                            <li key={index}>
                                <span>{student.rollNo}</span> <span>{student.name}</span> 
                                <input 
                                    type="number" 
                                    value={marksList[index]} 
                                    onChange={(e) => {
                                        const updatedMarks = [...marksList];
                                        updatedMarks[index] = e.target.value;
                                        setMarksList(updatedMarks);
                                    }}
                                />
                            </li>
                        )) }
                    </ul>
                </div>
            </section>
        </div>
    )
}