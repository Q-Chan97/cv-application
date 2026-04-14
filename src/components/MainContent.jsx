import Experience from "./Experience.jsx";
import Summary from "./Summary.jsx";

export default function MainContent () {
    return (
        <section className="main-content-wrapper">
            <Summary />
            <Experience />
        </section>
    )
}