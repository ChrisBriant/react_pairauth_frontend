import { useState, useEffect } from "react";

const PasswordStrengthIndicator = ({password,setIsPasswordStrong}) => {
    const [strengthState, setStrengthState] = useState(0);

    useEffect(() => {
            console.log("USING EFFECT", password, strengthState);
            // 1. Define the criteria
            const requirements = {
                length: password.length >= 12,
                hasNumeric: /\d/.test(password),
                hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
                hasUpper: /[A-Z]/.test(password),
                hasLower: /[a-z]/.test(password),
            };

            // 2. Count how many requirements are met
            const strengthPoints = Object.values(requirements).filter(Boolean).length;

            // 3. Return true only if ALL 4 criteria are met
            // You can adjust this logic (e.g., return strengthPoints to drive your UI stages)
            if(strengthPoints > 4) {
                setIsPasswordStrong(true);
            } else {
                setIsPasswordStrong(false);
            }

            setStrengthState(strengthPoints);
    }, [password]);

    return (
        <div className="indicatorBar">
            <div className= { strengthState < 1 ? "segment" : "segment active" } ></div>
            <div className= { strengthState < 2 ? "segment" : "segment active" } ></div>
            <div className= { strengthState < 5 ? "segment" : "segment active" } ></div>
        </div>
    );    
}

export default PasswordStrengthIndicator;