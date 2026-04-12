
import { useNavigate } from "react-router-dom";
import { acceptTerms } from "../network/apiCalls";


const TermsAndConditions = ({setSessionRefresh}) => {
    const navigate = useNavigate();

    const handleAcceptTerms = async () => {
        //Code to accept terms and conditions
        try {
            await acceptTerms();
            navigate("/home");
        } catch(err) {
            navigate("/home");
        };
    }   

    return (
        <div className="panel">
            {/* <div className="termsContainer">
                <h1>Terms and Conditions</h1>
                <p>
                    This application is a demonstration Identity Broker designed to allow users
                    to authenticate using multiple Identity Providers (IdPs). By using this
                    application you agree to the terms described below.
                </p>

                <h2>Purpose of the Application</h2>
                <p>
                    This service allows users to sign in using supported Identity Providers
                    and then access a demonstration application where feedback can be submitted.
                    Authentication is performed by the selected Identity Provider.
                </p>

                <h2>Identity Providers</h2>
                <p>
                    When you sign in using an Identity Provider, authentication occurs
                    directly with that provider. This application receives limited identity
                    information from the provider in order to establish a session.
                </p>

                <h2>Information Collected</h2>
                <p>
                    When you authenticate, the following information may be stored in the
                    backend database:
                </p>

                <ul>
                    <li>Your email address provided by the Identity Provider</li>
                    <li>The unique identifier assigned to you by the Identity Provider</li>
                    <li>The name of the Identity Provider used</li>
                    <li>The date and time of authentication</li>
                </ul>

                <p>
                    This information is stored solely for the purpose of operating the
                    authentication system and associating submitted feedback with a user
                    account.
                </p>

                <h2>Privacy</h2>
                <p>
                    Identity information stored by this application is not exposed to other
                    users and is not shared with third parties. Access to stored information
                    is restricted to the backend system that manages authentication and
                    session handling.
                </p>

                <h2>Cookies and Sessions</h2>
                <p>
                    This application uses secure session cookies to maintain your login
                    session after authentication. These cookies are required for the
                    application to function correctly.
                </p>

                <h2>Data Usage</h2>
                <p>
                    Any feedback submitted within the application may be stored for
                    demonstration and development purposes. Do not submit sensitive or
                    confidential information.
                </p>

                <h2>Changes to These Terms</h2>
                <p>
                    The terms and privacy policy for this demonstration system may be
                    updated at any time. Users may be required to review and accept
                    updated terms before continuing to use the application.
                </p>

                <hr style={{margin: "40px 0"}} />

                <button
                    className="btn"
                    onClick={() => handleAcceptTerms()} >
                    Accept and Continue
                </button>
            </div> */}
            <div className="termsContainer">
                <h1>Terms and Conditions</h1>
                <p>
                    This application is a demonstration Multi-Factor Authentication (MFA)
                    system designed to provide authentication using a combination of
                    password-based and device-based authentication. By using this
                    application, you agree to the terms described below.
                </p>

                <h2>Purpose of the Application</h2>
                <p>
                    This service allows users to register an account secured by a password
                    and a trusted device. Authentication requires both factors to verify
                    user identity and demonstrate a stronger authentication model.
                </p>

                <h2>Authentication Methods</h2>
                <p>
                    This application uses two authentication factors:
                </p>
                <ul>
                    <li>A password chosen and managed by the user</li>
                    <li>A registered device used as a second authentication factor</li>
                </ul>
                <p>
                    Access to the application requires successful verification of both
                    factors. Loss of either factor may prevent access to your account.
                </p>

                <h2>Device Registration</h2>
                <p>
                    During registration, a device may be linked to your account. This device
                    is used as part of the authentication process. You are responsible for
                    maintaining control of any registered devices.
                </p>
                <p>
                    If you lose access to your device, you may be required to re-register
                    or verify your identity through supported recovery mechanisms, if available.
                </p>

                <h2>Information Collected</h2>
                <p>
                    When you register and authenticate, the following information may be
                    stored in the backend database:
                </p>

                <ul>
                    <li>Your username or identifier</li>
                    <li>A securely hashed version of your password</li>
                    <li>Device identifiers or cryptographic credentials associated with your device</li>
                    <li>Authentication timestamps and activity logs</li>
                </ul>

                <p>
                    This information is stored solely for the purpose of operating the
                    authentication system and ensuring secure access.
                </p>

                <h2>Security</h2>
                <p>
                    Reasonable measures are taken to protect stored credentials and
                    authentication data. Passwords are not stored in plain text and
                    device-based authentication relies on secure cryptographic mechanisms.
                </p>
                <p>
                    However, this is a demonstration system and should not be relied upon
                    for protecting sensitive or production-level data.
                </p>

                <h2>Privacy</h2>
                <p>
                    Information stored by this application is not shared with third parties
                    and is only used to support authentication functionality. Access is
                    restricted to the backend system managing authentication processes.
                </p>

                <h2>Cookies and Sessions</h2>
                <p>
                    This application uses secure session cookies to maintain your authenticated
                    session. These cookies are necessary for the application to function
                    correctly and cannot be disabled while using the service.
                </p>

                <h2>User Responsibilities</h2>
                <p>
                    You are responsible for:
                </p>
                <ul>
                    <li>Keeping your password secure</li>
                    <li>Maintaining control of your registered device(s)</li>
                    <li>Not sharing your authentication credentials with others</li>
                </ul>

                <h2>Limitations of Use</h2>
                <p>
                    This application is intended for demonstration and development purposes only.
                    Do not use real, sensitive, or confidential information when registering
                    or interacting with the system.
                </p>

                <h2>Changes to These Terms</h2>
                <p>
                    These terms may be updated at any time. Users may be required to review
                    and accept updated terms before continuing to use the application.
                </p>

                <hr style={{margin: "40px 0"}} />

                <button
                    className="btn"
                    onClick={() => handleAcceptTerms()} >
                    Accept and Continue
                </button>
            </div>
        </div>

    );
}

export default TermsAndConditions;