import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import React from "react";

function Home(){
    const navigate = useNavigate();
    const {session, signout} = userAuth();

    console.log(session);
    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await signout();
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-sky-500">
            <h1 className="text-4xl font-bold text-white mb-8">Welcome to MathReps</h1>
            <div className="grid gap-6">
                <div onClick={() => navigate('/practice')} className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform">
                    <h2 className="text-2xl font-semibold text-sky-800 mb-2">Practice Math</h2>
                    <p className="text-gray-600">Start solving math problems and track your progress</p>
                </div>
                <button className="bg-white text-black p-2 rounded-md w-full hover:bg-gray-100" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Home;