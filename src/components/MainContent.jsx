import Experience from "./Experience.jsx";
import Summary from "./Summary.jsx";

export default function MainContent ({userInfo, setUserInfo}) {
    return (
        <section className="main-content-wrapper">
            <Summary userInfo={userInfo} setUserInfo={setUserInfo}/>
            <Experience userInfo={userInfo} setUserInfo={setUserInfo}/>
        </section>
    )
}