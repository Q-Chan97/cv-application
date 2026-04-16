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
    location: "Chicago, IL",
    degree: "Master's Degree",
    university: "University of Sheboygan",
    gradDate: "01/01/1975",
    skills: ["Javascript", "HTML", "CSS", "React"],
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
          <Sidebar userInfo={userInfo} setUserInfo={setUserInfo}/>
          <MainContent />
        </div>
      </main>
    </div>
  )
}