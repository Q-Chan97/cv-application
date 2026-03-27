import Contact from "./Contact"

export default function General() {
    return (
        <>
          <div className="name-wrapper">
            <h1>Name</h1>
            <h2>Occupation Title</h2>
          </div>
          <div className="contact-wrapper">
            <Contact />
          </div>
        </>
    )
}