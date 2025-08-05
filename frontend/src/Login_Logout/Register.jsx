import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {

    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            const data = await response.json()
            console.log(data);

            if (data.success === true) {
                navigate('/login')
            }

            if (data.success === false) {
                alert(data.errors[0].msg);
            }

        } catch (error) {
            console.log('Server Error : ', error);
        }
    }

    const handelChangeValue = (e) => {
        const { name, value } = e.target;
        setUser(
            { ...user, [name]: value }
        )
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 text-gray-700  bg-white rounded-lg shadow-black shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handelSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium">Username</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={user.name}
                            onChange={handelChangeValue}
                            className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-800"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={user.email}
                            onChange={handelChangeValue}
                            className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-800"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium">password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={user.password}
                            onChange={handelChangeValue}
                            className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-800"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
                    >
                        Register
                    </button>

                    <div className="text-center pt-3">
                        <p>
                            Have already an account?{' '}
                            <Link to="/login" className="font-bold underline">
                                Login here
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
