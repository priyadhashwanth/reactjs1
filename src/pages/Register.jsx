import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

// controlled component
// using state to manage their values
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Registering user...')
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);

        setTimeout(() => {
            // clear the form
            setName('');
            setEmail('');
            setPassword('');

            toast.success('Registration Successful');
            navigate('/login');
        }, 500);
    }

    return (
        <div>
            <h1 className="text-4xl p-4 ml-4">Register</h1>
            <div className="w-xs mx-8 border p-4 border-gray-400 shadow-xl">
                <form className="flex flex-col gap-7" onSubmit={handleRegister}>
                    <input
                        type="text"
                        className="border w-full p-1"
                        placeholder="Name..."
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
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
                    >Register</button>
                    <p className="text-sm font-semibold text-slate-600 ">
                        Already have an account? &nbsp;
                        <Link
                            to={"/login"}
                            className="hover:text-blue-700"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Register;