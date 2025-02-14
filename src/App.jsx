import React from 'react'
import Navbar from './Components/Navbar';
import Detail from './Components/Detail';
import About from './Components/About';


 const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 selection:bd-cycan-300 selection:text-cycan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'><div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div></div>
            <div className='container mx-auto px-4'>
        <Navbar />
        <Detail/>
        <About/>
        
      </div>
      
    </div>
  )
}

export default App;
