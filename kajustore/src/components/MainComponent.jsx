import React from 'react'




import DailyEntry from './dailyentry/DailyEntry'
import Dashboard from './dashboard/Dashboard'
import Khatabook from './khatabook/Khatabook'
import Analytics from './analytics/Analytics'
import Settings from './settings/Settings'
import Notes from './notes/Notes'


const MainComponent = ({change}) => {



  return (
    <main className="p-4">
     
      {change === 'Dashboard' && <Dashboard />}
      {change === 'Khatabook' && <Khatabook />}
      {change === 'Notes' && <Notes />}
      {change === 'Analytics' && <Analytics />}
      {change === 'Settings' && <Settings />}
      {change === 'DailyEntry' && <DailyEntry />}

    </main>
  );
};

export default MainComponent;
