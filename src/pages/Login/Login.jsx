import "./login.css";
import React, { useState } from "react";
import BaseButton from "../../components/Button/BaseButton";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState({mail: "", password: ""})
    const [incorrect, setIncorrect] = useState(false);
    const navigate = useNavigate();
    const submitFunc = () => {
        if (user.mail === "tarush@student.com" && user.password === "tarush") {
            navigate("/student");
        } else if (user.mail === "tarush@teacher.com" && user.password === "tarush") {
            navigate("/teacher");
        } else {
            setIncorrect(true);
        }
    }
    return (
    <>
    <div className="login-container">
        <div className="loginForm">
            <img src="/images/org-logo.png" alt="organisation logo" className="org-logo" />
            <h3>Login</h3>
            <input type="email" id="" value={user.mail} placeholder="Enter Email" 
                onChange={(e) => {
                    setUser((u) => { return {...u, mail: e.target.value} })
            }} />
            
            <input type="password" id="" value={user.password} placeholder="Enter Password" 
                onChange={(e) => {
                    setUser((u) => { return {...u, password: e.target.value} })
            }} />

            {incorrect && <div className="err-msg">Incorrect Email or Password</div>}
            <BaseButton text="Login" func={submitFunc} />
        </div>
    </div>
    </>
    )
}