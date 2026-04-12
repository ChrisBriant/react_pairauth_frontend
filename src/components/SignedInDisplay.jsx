import signInGraphic from '../assets/id_card.svg';
import { signOut } from '../network/apiCalls';
import { useNavigate } from 'react-router-dom';

const SignedInDisplay = ({profile}) => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            const res = await signOut();
            //Direct back to the home page
            window.location.href = "/home";
        } catch(err) {
            console.error("Error signing out", res);
        }
        
    }

    return(
        <div className="panel">
            <h2>Welcome {profile.user_name}</h2>
            <div id="signInGraphicContainer" className='imgContainer'>
                <img src={signInGraphic} alt="sign in graphic" />
            </div>
            <h3>You Are Signed In</h3>
            <button className='btn' onClick={() => handleSignOut()} >Sign Out</button>
        </div>
    );
}

export default SignedInDisplay;