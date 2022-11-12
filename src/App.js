import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'boxicons/css/boxicons.min.css'
import SideBar from "./components/SideBar"
import Header from "./components/Header"
import MainDiv from "./components/MainDiv"
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const showHideSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  const showHideSidebar1 = () => {
    if (sidebarOpen === false) {
        setSidebarOpen(true);
    }
  }

  const showHideSidebar2 = () => {
    if (sidebarOpen === true) {
        setSidebarOpen(false);
    }
  }

  return (
    <div className="App">

      <Header onClick = {showHideSidebar} onClick1 = {showHideSidebar1} />
      <SideBar isOpen = {sidebarOpen} onClick2 = {showHideSidebar2}/>
      <MainDiv />

    </div>
  );
}

export default App;
