import { useState, useEffect } from "react";
import { signOut, refresh,getSession } from "../network/apiCalls";
import { useNavigate } from "react-router-dom";

const Home = () => {
    //const [sessionRefresh,setSessionRefresh] = useState(0);
    const [profile, setProfile] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [loadingSession,setLoadingSession] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        getSession().then((res) => {
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
            <h2>This is the Home Page</h2>
            {
                authenticated
                ? <h2>You Are Authenticated</h2>
                : null
            }
            {/* <div className="menuSelection panel">
                <a href="/register" className="btn">
                    Register
                </a>
                <a href="/challenge/QlLswn2gudev_yHfWLOh2ZtUJgNskDk-Jnr7YnYyrT4/register" className="btn">
                    Register Challenge
                </a>
                <a href="/challenge/QlLswn2gudev_yHfWLOh2ZtUJgNskDk-Jnr7YnYyrT4/signin" className="btn">
                    Sign In Challenge
                </a>

            </div> */}

        </div>
    );
}

export default Home;