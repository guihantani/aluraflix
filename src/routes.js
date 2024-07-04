import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";
import NotFound from "./pages/NotFound";

function AppRoutes(){
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/NewVideo" element={<NewVideo/>}></Route>
                    <Route path="/*" element={<NotFound/>}></Route>
                </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;