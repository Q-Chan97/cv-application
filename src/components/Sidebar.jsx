import Education from "./Education.jsx";
import Languages from "./Languages.jsx";
import Skills from "./Skills.jsx";

function Sidebar() {
    return (
        <section className="sidebar-wrapper">
            <Education />
            <Skills />
            <Languages />
        </section>
    )
}

export default Sidebar;