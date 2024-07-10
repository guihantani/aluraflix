import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";
import NotFound from "./pages/NotFound";
import BasePage from "./pages/BasePage";
import { VideoProvider } from "./context/VideoContext";
import { useState } from "react";

function AppRoutes(){
    return (
        <BrowserRouter>
            <VideoProvider>
                    <Routes>
                        <Route path="/" element={<BasePage/>}>
                            <Route index element={<Home/>}></Route>
                            <Route path="NewVideo" element={<NewVideo/>}></Route>
                            <Route path="*" element={<NotFound/>}></Route>
                        </Route>
                    </Routes>
            </VideoProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;