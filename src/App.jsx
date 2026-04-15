import { useState } from "react";
import General from "./components/General.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MainContent from "./components/MainContent.jsx";

export default function App() {
  const [userInfo, setUserInfo] = useState({
    name: "Your Name",
    title: "Occupation Title",
    phoneNumber: "000-000-0000",
    email: "ExampleEmail@domain.com",
    location: "Chicago, IL"
  });

  return (
    <div className="app-container">
      <header>
        <div className="header-wrapper">
          <General userInfo={userInfo} setUserInfo={setUserInfo}/>
        </div>
      </header>
      <main>
        <div className="main-wrapper">
          <Sidebar />
          <MainContent />
        </div>
      </main>
    </div>
  )
}