import { QRCodeSVG } from "qrcode.react";
import { useParams } from "react-router-dom";


const ChallengePage = () => {
    //const qrValue = "uk.chrisbriant.pairauth://pair?token=abc123";
    const { challengeCode } = useParams();
    const qrValue = `${process.env.ANDROID_SCHEME}pair?token=${challengeCode}`;
    
    return (
        <div className="qrCodePage">
            <h2>Scan to sign in</h2>
            <div className="panel challengeCodeManual">
                <QRCodeSVG value={qrValue} size={256} />
                <div className="altPanel">
                    <h3>Challenge Code</h3>
                    <h2>{challengeCode}</h2>
                </div>
            </div>

        </div>

    );
}

export default ChallengePage;