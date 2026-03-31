import { QRCodeSVG } from "qrcode.react";


const SignInQrCode = () => {
    const qrValue = "uk.chrisbriant.pairauth://pair?token=abc123";
    
    return (
        <div>
            <h2>Scan to sign in</h2>
            <QRCodeSVG value={qrValue} size={256} />
        </div>
    );
}

export default SignInQrCode;