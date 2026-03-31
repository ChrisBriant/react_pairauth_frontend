import { Routes, Route} from "react-router-dom";
import Layout from './layout/Layout';
import Home from "./pages/Home";
import Register from "./pages/Register";


const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/register" element={<Register />}>
                </Route>
            </Routes>
        </>
    );
}


export default MainRoutes;