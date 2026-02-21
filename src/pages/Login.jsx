import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in user...');
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);

        toast.success('Login successful');

        setTimeout(() => {
            // clear the form values
            setEmail('');
            setPassword('');

            navigate('/dashboard');
        }, 500);
    }

    return (
        <div>
            <h1 className="text-4xl p-4 ml-4">Login</h1>
            <div className="w-xs mx-8 border p-4 border-gray-400 shadow-xl">
                <form className="flex flex-col gap-7" onSubmit={handleLogin}>
                    <input
                        type="text"
                        className="border w-full p-1"
                        placeholder="Email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        className="border w-full p-1"
                        placeholder="Password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="border p-2 bg-slate-500 hover:bg-slate-700 text-white cursor-pointer"
                    >Login</button>
                    <p className="text-sm font-semibold text-slate-600 ">
                        Don't have an account? &nbsp;
                        <Link
                            to={"/register"}
                            className="hover:text-blue-700"
                        >
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;