import Card from './card';
import { userAuth } from '../context/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {session, login} = userAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await login(email, password);
            if(result.success){
                navigate('/home');
                setLoading(false);
            }
        }catch (error) {
            setError(error.message);
        }finally {
            setLoading(false);
        }
    }
    
    return (
        <div className='flex flex-col items-center justify-center bg-sky-500 h-screen'>
            <div>
                <Card className="w-80">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-2xl font-semibold">Login</h1>
                        <form onSubmit={handleLogin} className='flex flex-col gap-2 w-full'>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="p-2 border rounded" />
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="p-2 border rounded" />
                            <button type="submit" className="bg-sky-500 text-white p-2 rounded hover:bg-sky-600">Login</button>
                        </form>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Login;
