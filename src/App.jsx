import General from "./components/General.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MainContent from "./components/MainContent.jsx";

export default function App() {
  return (
    <div className="app-container">
      <header>
        <div className="header-wrapper">
          <General />
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