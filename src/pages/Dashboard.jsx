import { Link } from "react-router";

const NavBar = () => {
    return (
        <div className="p-4">
            <ul className="flex flex-row space-x-5">
                <li>
                    <Link
                        className="hover:text-red-700 hover:border hover: border-2 hover: p-2" to="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className="hover:text-red-700 hover:border hover: border-2 hover: p-2" to="/register"
                    >
                        Register
                    </Link>
                </li>
                <li>
                    <Link
                        className="hover:text-red-700 hover:border hover: border-2 hover: p-2" to="/login"
                    >
                        Login
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;