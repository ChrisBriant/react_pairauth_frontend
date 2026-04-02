import { QRCodeSVG } from "qrcode.react";
import { useParams, useNavigate } from "react-router-dom";


const ChallengePage = () => {
    //const qrValue = "uk.chrisbriant.pairauth://pair?token=abc123";
    const { challengeCode } = useParams();
    const qrValue = `${process.env.ANDROID_SCHEME}pair?token=${challengeCode}`;
    const navigate = useNavigate();
    
    return (
        <div className="qrCodePage">
            <h2>Scan to sign in</h2>
            <div className="panel challengeCodeManual">
                <QRCodeSVG value={qrValue} size={256} />
                <div className="altPanel">
                    <h3>Challenge Code</h3>
                    <h2>{challengeCode}</h2>
                </div>
                <p>Press continue once the device is registered to sign in.</p>
                <button className="btn" onClick={() => navigate('/signin') }>
                    Continue
                </button>
            </div>

        </div>

    );
}

export default ChallengePage;