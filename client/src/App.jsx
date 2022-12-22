import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className={`relative sm:-8 p-4 ${darkMode?'bg-[#13131a]': 'bg-white'} min-h-screen flex flex-row`}>
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/profile" element={<Profile darkMode={darkMode}  />} />
          <Route path="/create-campaign" element={<CreateCampaign darkMode={darkMode}  />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails darkMode={darkMode} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App