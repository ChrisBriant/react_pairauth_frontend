import { signIn } from "../network/apiCalls";
import { useState } from "react";

const SignInPage = () => {
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

    const handleSignin = async () => {
        console.log("I WILL TRY TO SIGN IN");
        try {
            const challenge = await signIn({
                user_name : userName,
                password : password,
            });
            //Needs to set the type which is either registration or signin
            //UI needs to respond with regards to the deep link sent
            if(challenge) {
                window.location.href = `/challenge/${challenge}`;
            }
        } catch(err) {
            console.error("Unable to sign in", e);
        }

    };

    return (
        <div>
            <h2>Sign In</h2>
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
                <button className="btn"  onClick={() => handleSignin()}>
                    Sign In
                </button>
            </div>
        </div>
    );
}

export default SignInPage;