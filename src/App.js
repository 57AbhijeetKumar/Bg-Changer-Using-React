import './App.css';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState("black")

  return (
    <div className="App fixed w-full h-screen" style={{ backgroundColor: color }}>
      <h1 className='text-6xl relative top-40 text-zinc-700'>Welcome to Background Changer Website</h1>
      <div className="buttons relative top-48 left-36 w-2/5 p-4 rounded-lg bg-cyan-300 ">
        <button className='border-pink-600 border-2 rounded-2xl p-2 mt-2 bg-pink-600' onClick={() => setColor("pink")}>Pink</button>
        <button className='border-yellow-400 border-2 rounded-2xl p-2 mt-2 ml-2 bg-yellow-400' onClick={() => setColor("yellow")}>Yellow</button>
        <button className='border-red-600 border-2 rounded-2xl p-2 mt-2 ml-2 bg-red-600' onClick={() => setColor("red")}>Red</button>
        <button className='border-green-500 border-2 rounded-2xl p-2 mt-2 ml-2 bg-green-500' onClick={() => setColor("green")}>Green</button>
        <button className='border-white border-2 rounded-2xl p-2 mt-2 ml-2 bg-white' onClick={() => setColor("white")}>White</button>
        <button className='border-blue-500 border-2 rounded-2xl p-2 mt-2 ml-2 bg-blue-500' onClick={() => setColor("blue")}>Blue</button>
      </div>
    </div>
  );
}

export default App;
