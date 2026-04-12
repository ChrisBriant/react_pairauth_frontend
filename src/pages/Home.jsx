import { useState, useEffect } from "react";
import { signOut, refresh,getSession } from "../network/apiCalls";
import { useNavigate } from "react-router-dom";
import SignedInDisplay from "../components/SignedInDisplay";

const Home = () => {
    //const [sessionRefresh,setSessionRefresh] = useState(0);
    const [profile, setProfile] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [loadingSession,setLoadingSession] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        getSession().then((res) => {
            //Check terms and conditions are accepted
            if(!res.accepted_terms) navigate("/terms");
            //Set loaded, profile and authenticated 
            setLoadingSession(false);
            setAuthenticated(true);
            setProfile(res);
        }).catch(err => {
        if(err.response.status === 401) {
            //Try refresh
            refresh().then( async (res) => {
                const profile = await getSession();
                setProfile(profile);
                setLoadingSession(false);
                setAuthenticated(true);
            }).catch(async err => {
                if(err.response.status === 401) {
                    //Re-authentication required
                    setLoadingSession(false);
                    setAuthenticated(false);
                    //Authentication has failed so the user needs to sign in
                    navigate("/signin");
                }
            });
        }
        });
    }, [])

    return(
        <div>
            {
                authenticated
                ? <SignedInDisplay profile={profile} />
                : null
            }
        </div>
    );
}

export default Home;