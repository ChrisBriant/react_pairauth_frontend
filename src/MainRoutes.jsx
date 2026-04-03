import { Routes, Route} from "react-router-dom";
import Layout from './layout/Layout';
import Home from "./pages/Home";
import Register from "./pages/Register";
import ChallengePage from "./pages/ChallengePage";
import SignUpComplete from "./pages/SignUpComplete";
import SignInPage from "./pages/SignInPage";
import Options from "./pages/Options";


const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/home" element={<Home />}>
                </Route>
                <Route path="/register" element={<Register />}>
                </Route>
                <Route path="/challenge/:challengeCode/:type" element={<ChallengePage  />}>
                </Route>
                <Route path="/signupcomplete" element={<SignUpComplete  />}>
                </Route>
                <Route path="/options" element={<Options  />}>
                </Route>
                <Route path="/signin" element={<SignInPage  />}>
                </Route>
            </Routes>
        </>
    );
}


export default MainRoutes;