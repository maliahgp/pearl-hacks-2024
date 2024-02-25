import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UNCMap } from './components/Map'


function App() {
  const [activeLocation, setActiveLocation] = useState({})

  const updateActiveLocation = (location) => {
    setActiveLocation(location);
  };

  return (
    <>
     <div className="container">
      <div className='container-left'>
      <UNCMap markerClick={updateActiveLocation} ></UNCMap>
      </div>
      <div className='container-right'>
        <div className='location-pic'>
          <div className='Picture'></div>
          {activeLocation.picture}
        </div>
        <div className='comments'></div>
      </div>
     </div>
    </>
  )
}

export default App
