import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { TbMatrix } from "react-icons/tb";
import { IoStatsChart } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";



import './App.css'
import Card from './componets/card'


//welcome page
function App() {

  const navigate = useNavigate();
  const sectionRef = useRef();
  
  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    

    <div className=' h-max'>
      <div className="flex justify-end p-4 ">
        <button onClick={() => navigate('/login')} className="text-white hover:bg-white hover:text-sky-500 px-4 py-2 rounded-lg mr-4 border-2 border-white transition-colors">
          Login
        </button>
        <button onClick={() => navigate('/signup')} className="text-white hover:bg-white hover:text-sky-500 px-4 py-2 rounded-lg border-2 border-white transition-colors">
          Sign Up
        </button>
      </div>
      <div className='flex flex-col min-w-full min-h-screen justify-center items-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold font-sans pb-1'>Welcome to MathReps</h1>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-white pb-2 font-sans'>Your Math Practice Tool</p>
        <button 
        className='border-2 border-white text-white rounded-2xl px-4 py-2 hover:bg-white hover:text-sky-500 transition-colors font-sans'
        onClick={handleScroll}>
          Start
        </button>
      </div>
      <div className='bg-gradient-to-b to-sky-900 flex justify-center items-center min-h-screen'>
        <div ref={sectionRef} className='flex flex-wrap border-2 border-white rounded-lg p-4 sm:p-6 md:p-8 w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2'>
            <div className='flex flex-col sm:flex-row justify-around items-center w-full gap-4 sm:gap-6'>
                <div onClick={() => navigate('/practice')} className="cursor-pointer w-full sm:w-1/3">
                  <Card className="flex flex-col text-center justify-center items-center transform hover:-translate-y-2 transition-transform duration-300 min-h-[200px] sm:min-h-[250px] md:min-h-[300px]" >
                    <TbMatrix className='h-12 sm:h-16 md:h-20 w-auto text-sky-500' />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-sky-500 mt-4">Practice</h3>
                    <p className="text-xs sm:text-sm md:text-base text-sky-500 mt-2">Improve your math skills with interactive exercises</p>
                  </Card>
                </div>
                <div onClick={() => navigate('/stats')} className="cursor-pointer w-full sm:w-1/3">
                  <Card className="flex flex-col text-center justify-center items-center transform hover:-translate-y-2 transition-transform duration-300 min-h-[200px] sm:min-h-[250px] md:min-h-[300px]" >
                    <IoStatsChart className='h-12 sm:h-16 md:h-20 w-auto text-sky-500'/>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-sky-500 mt-4">Stats</h3>
                    <p className="text-xs sm:text-sm md:text-base text-sky-500 mt-2">Login or Signup to keep track of your Progress!</p>
                  </Card>
                </div>
                <div onClick={() => navigate('/settings')} className="cursor-pointer w-full sm:w-1/3">
                  <Card className="flex flex-col text-center justify-center items-center transform hover:-translate-y-2 transition-transform duration-300 min-h-[200px] sm:min-h-[250px] md:min-h-[300px]" >
                    <IoIosSettings className='h-12 sm:h-16 md:h-20 w-auto text-sky-500' />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-sky-500 mt-4">Settings</h3>
                    <p className="text-xs sm:text-sm md:text-base text-sky-500 mt-2">Change settings and preferences</p>
                  </Card>
                </div>
            </div>
        </div>
      </div>
     
    </div>
    
    
  )
}

export default App
