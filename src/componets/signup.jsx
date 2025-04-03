import Card from "./card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignUp() {
    
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const[error, setError] = useState('');
    const[loading, setLoading] = useState('');
    const navigate = useNavigate();
    
    const{session, signup} = userAuth();
    console.log(session);
    
    
    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            const result = await signup(email, password, confirmPassword);
            
            if(result.success){
                navigate('/home');
                setLoading(false);
            }  
        }catch(error){
            setError(error.message);
            
        }finally{
            setLoading(false);
        }
    };
    return (
        <div className='flex flex-col items-center justify-center bg-sky-500 h-screen'>
            <Card className="w-80">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-2xl font-semibold">Sign Up</h1>
                    <form className='flex flex-col gap-2 w-full' onSubmit={handleSignup}>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="p-2 border rounded" />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="p-2 border rounded" />
                        <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" className="p-2 border rounded" />
                        <button type="submit" className="bg-sky-500 text-white p-2 rounded hover:bg-sky-600">Sign Up</button>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                        {error && <p className="text-red-500">{error}</p>}
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default SignUp;