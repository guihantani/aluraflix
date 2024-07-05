import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

function BasePage(){
    return(
        <main>
            <Header/>
            <Outlet/>
        </main>
    )
}

export default BasePage;