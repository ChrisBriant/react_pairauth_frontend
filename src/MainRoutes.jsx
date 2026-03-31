import { Routes, Route} from "react-router-dom";
import Layout from './layout/Layout';
import Home from "./pages/Home";
import Register from "./pages/Register";
import ChallengePage from "./pages/ChallengePage";


const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/register" element={<Register />}>
                </Route>
                <Route path="/challenge/:challengeCode" element={<ChallengePage  />}>
                </Route>
            </Routes>
        </>
    );
}


export default MainRoutes;