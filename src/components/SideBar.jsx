import { Link } from "react-router";

const SideBar = () => {
    return (
        <div className="ml-8">
            <ul>
                <li>
                    <Link to={"/dashboard/todos"}>
                        All Todos
                    </Link>
                </li>
                <li>Create Todo</li>
                <li>Update Todo</li>
                <li>Delete Todo</li>
            </ul>
        </div>
    )
}

export default SideBar;