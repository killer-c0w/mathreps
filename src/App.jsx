import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'


//welcome page
function App() {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center bg-sky-500 h-screen'>
      <div className='text-center '>
        <h1 className='text-5xl font-bold text-white mb-4'>Welcome to MathReps</h1>
        <p className='text-white text-xl pb-4'>Your Personal Math Practice Assistant</p>
        <button className='bg-white text-black px-4 py-2 rounded-md' onClick={() => navigate('/signup')}>Get Started</button>
      </div>
    </div>
  )
}

export default App
