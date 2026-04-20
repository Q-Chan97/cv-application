import JobArticle from "./Job.jsx"

export default function Experience({userInfo, setUserInfo}) {
    return (
        <section className="main-section-wrapper">
            <div className="heading-wrapper">
                <h3>Professional Experience</h3>
            </div>
            <div className="job-section-wrapper">
                {userInfo.jobs.map((job, index) => (
                    <JobArticle key={index} jobIndex={index} companyName={job.companyName} title={job.title} dates={job.dates} duties={job.duties} userInfo={userInfo} setUserInfo={setUserInfo}/>
                ))}
            </div>
        </section>
    )
}