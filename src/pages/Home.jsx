import { Link } from "react-router";

const Home = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl p-4">
                Welcome to my React Router App
            </h1>

            <p className="p-4">
                This is the home page of my React Router App. You can navigate to the register and login pages using the links in the header.
            </p>
        </div>
    )
}

export default Home;