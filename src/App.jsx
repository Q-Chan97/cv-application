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
    languages: ["English", "Japanese"],
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    jobs: [
      {
        companyName: "Ebonheart Inc",
        title: "High Wizard",
        dates: "May 2023 - Present",
        duties: ["Created new spells", "Delved into dungeons", "Unraveled the mysteries of the Aether"] 
      },
      {
        companyName: "Pizza Palace",
        title: "Tool guy",
        dates: "July 2019 - May 2023",
        duties: ["Wrenched bolts", "Hammered Nails", "Greased wheels"]
      }
    ]
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
          <MainContent userInfo={userInfo} setUserInfo={setUserInfo}/>
        </div>
      </main>
    </div>
  )
}