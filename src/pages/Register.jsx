import { useState } from "react";
import PasswordStrengthIndicator from "../components/PasswordStrengthIndicator";

const Register = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [isPasswordStrong, setIsPasswordStrong] = useState(false);


    const handleRegister = () => {
        if(!isPasswordStrong || userName.length < 8  || confirmPassword !== password) return;
        console.log("I WILL REGISTER", password, confirmPassword);
    }

    return(
        <div>
            <h2>Register</h2>
            <div className="signInBox panel">
                <div className="formGroup">
                    <label htmlFor="userName">
                        User Name:
                    </label>
                    <input id="userName" type="text" onChange={(e) => setUserName(e.target.value) } />
                </div>
                <div className="formGroup">
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input id="password" type="password" onChange={(e) => setPassword(e.currentTarget.value) } />
                </div>
                <div className="indicatorContainer altPanel">
                    <h3>Password Strength</h3>
                    <PasswordStrengthIndicator password={password} setIsPasswordStrong={setIsPasswordStrong} />
                </div>
                
                <div className="formGroup">
                    {
                        isPasswordStrong
                        ? <>
                            <label htmlFor="confirm">
                                Confirm Password:
                            </label>
                            <input id="confirm" type="password" onChange={(e) => setConfirmPassword(e.currentTarget.value)} />
                        </>
                        : null
                    }

                </div>
                {/* <button className="btn" disabled={!isPasswordStrong && (userName.length < 8) && (confirmPassword !== password)} onClick={() => handleRegister()}> */}
                <button className="btn" disabled={!isPasswordStrong || userName.length < 8  || confirmPassword !== password } onClick={() => handleRegister()}>
                    Register
                </button>
            </div>
        </div>
    );
}

export default Register;