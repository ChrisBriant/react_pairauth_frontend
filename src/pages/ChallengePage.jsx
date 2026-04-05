import { QRCodeSVG } from "qrcode.react";
import { useParams, useNavigate } from "react-router-dom";


const ChallengePage = () => {
    //const qrValue = "uk.chrisbriant.pairauth://pair?token=abc123";
    const { challengeCode, type } = useParams();
    //const qrValue = `${process.env.ANDROID_SCHEME}pair?token=${challengeCode}&type=${type}`;
    //const qrValue = `${process.env.REDIRECT_ENDPOINT_URL}/auth/deviceredirect?redirect_url=${process.env.ANDROID_SCHEME}pair?token=${challengeCode}&type=${type}`;
    const innerUrl = `${process.env.ANDROID_SCHEME}pair?token=${challengeCode}&type=${type}`;
    const qrValue = `${process.env.REDIRECT_ENDPOINT_URL}/auth/deviceredirect?redirect_url=${encodeURIComponent(innerUrl)}`;
    console.log("QR URL", qrValue);
    const navigate = useNavigate();

    console.log("QR Value", qrValue);

    return (
        <div className="qrCodePage">
            { type === "register" ? <h2>Scan to Register</h2> : <h2>Scan to Sign In</h2> }  
            <div className="panel challengeCodeManual">
                <QRCodeSVG value={qrValue} size={256} />
                <div className="altPanel">
                    <h3>Challenge Code</h3>
                    <h2>{challengeCode}</h2>
                </div>
                {
                    type === "register" 
                    ? <>
                        <p>Press continue once the device is registered to sign in.</p>
                        <button className="btn" onClick={() => navigate('/signin') }>
                            Continue
                        </button>
                    </>
                    : <>
                        <p>Press continue once authentication is complete.</p>
                        <button className="btn" onClick={() => window.location.href = `${process.env.API_BASE_URL}/auth/complete-signin` }>
                            Continue
                        </button>
                    </>
                }

            </div>

        </div>

    );
}

export default ChallengePage;