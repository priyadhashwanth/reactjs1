import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const HomeWrapper = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default HomeWrapper;