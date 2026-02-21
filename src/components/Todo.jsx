import axios from "axios";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Todo = () => {

    const todo = useLoaderData();
    const navigate = useNavigate();

    const handleDelete = () => {
        const option = confirm('Are you sure?');
        if (option) {
            // delete logic
            axios
               .delete(`https://6996bab57d17864365751d3e.mockapi.io/todo/${todo.id}`)
                .then(() => {
                    toast.success('Todo deleted');

                    setTimeout(() => {
                        navigate('/dashboard/todos');
                    }, 500);
                })
                .catch(() => {
                    toast.error('Todo deletion failed');
                })
        }
    }

    return (
        <div className="mt-4 border border-gray-300 shadow-2xl flex flex-col m-2">
            <div>
                <h3 className="text-2xl p-2 text-center font-semibold">{todo.title}</h3>
                <hr className="text-gray-300"></hr>
                <p className="text-sm p-2">{todo.description}</p>

                <div className="grid grid-cols-2 gap-2">
                    <div>
                        {
                            todo.isCompleted ? (
                                <div className="flex justify-start gap-2 p-2">
                                    <input
                                        type="checkbox"
                                        className="w-4 accent-green-600"
                                        checked={todo?.isCompleted ?? false}
                                        readOnly
                                    />
                                    <p>
                                        Completed
                                    </p>
                                </div>
                            ) : (
                                <div className="flex justify-start gap-2 p-2">
                                    <input
                                        type="checkbox"
                                        className="w-4"
                                        checked={todo?.isCompleted ?? false}
                                        readOnly
                                    />
                                    <p>
                                        Incomplete
                                    </p>
                                </div>
                            )
                        }
                    </div>

                    <div className="flex justify-center items-center text-sm text-gray-500">
                        {
                            new Date(todo.createdAt).toLocaleDateString("en-IN")
                        }
                    </div>
                </div>

                <div className="flex justify-center mt-8 mb-5">
                    <button className="flex px-5 py-1 bg-slate-200 rounded hover:bg-slate-300" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Todo;