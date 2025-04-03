import React from "react";


function Practice(){
    
    
    const handleStart = async () => {
        console.log("Start");
    }
    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-sky-500">
            <h1 className="text-white text-4xl font-bold">Practice</h1>
            <button className="bg-white text-black p-2 rounded-md w-80" onClick={handleStart}>Start</button>
        </div>
    )
}

export default Practice;