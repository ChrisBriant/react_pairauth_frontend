import { QRCodeSVG } from "qrcode.react";


const SignInQrCode = ({challengeCode}) => {
    //const qrValue = "uk.chrisbriant.pairauth://pair?token=abc123";
    const qrValue = `${import.meta.env.VITE_ANDROID_SCHEME}pair?token=${challengeCode}`;
    
    return (
        <div className="qrCodePage">
            <h2>Scan to sign in</h2>
            <div className="panel">
                <QRCodeSVG value={qrValue} size={256} />
                <div className="challengeCodeManual panelAlt">
                    <h3>Challenge Code</h3>
                    <h2>{challengeCode}</h2>
                </div>
            </div>

        </div>

    );
}

export default SignInQrCode;