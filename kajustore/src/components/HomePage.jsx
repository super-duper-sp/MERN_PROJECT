import React from 'react'
import { useState } from 'react'

// import Main from './Main'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import MainComponent from './MainComponent'

const HomePage = () => {

  const [activeComponent, setActiveComponent] = useState('DailyEntry');

  const handleToggleComponent = (component) => {
    setActiveComponent(component);
  };




  return (

    <div>

      <div className='mx-2 mt-2'>
        <Navbar/>
      </div>

      <div className='md:flex'>
        <div className='mt-2 mx-2'><Sidebar onToggleComponent={handleToggleComponent}/></div>
        <div className='mt-2 mx-2 bg-colorgrey rounded-lg'><MainComponent change={activeComponent}/></div>
      </div>


    </div>
    
  )
}

export default HomePage