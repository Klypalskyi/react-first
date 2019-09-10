import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import './App.css';
// import Inline from './Inline/Inline';
// import Mod from './Mod/Mod';
const App = () => {
  const navLinks = [
    {
      id: 1,
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      id: 2,
      name: 'User Profile',
      link: '/user',
    },
    {
      id: 3,
      name: 'Notifications',
      link: '/notifications',
    },
  ];

  return (
    <div className="App-container">
      <Sidebar menu={navLinks} />
      <Main />
      {/* <Inline/> */}
      {/* <Mod/> */}
    </div>
  );
};

export default App;
