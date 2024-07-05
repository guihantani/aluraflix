import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";
import NotFound from "./pages/NotFound";
import BasePage from "./pages/BasePage";

function AppRoutes(){
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BasePage/>}>
                        <Route index element={<Home/>}></Route>
                        <Route path="NewVideo" element={<NewVideo/>}></Route>
                        <Route path="*" element={<NotFound/>}></Route>
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;