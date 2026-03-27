import General from "./components/General.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Experience from "./components/Experience.jsx";

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
          <Experience />
        </div>
      </main>
    </div>
  )
}