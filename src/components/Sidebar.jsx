import Education from "./Education.jsx";
import Languages from "./Languages.jsx";
import Skills from "./Skills.jsx";

function Sidebar({userInfo, setUserInfo}) {
    return (
        <section className="sidebar-wrapper">
            <Education userInfo={userInfo} setUserInfo={setUserInfo}/>
            <Skills userInfo={userInfo} setUserInfo={setUserInfo}/>
            <Languages />
        </section>
    )
}

export default Sidebar;