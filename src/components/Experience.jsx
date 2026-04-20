import { useState } from "react"
import JobArticle from "./Job.jsx"

export default function Experience({userInfo, setUserInfo}) {
    const [editFlag, setEditFlag] = useState(false);

    function enableEdit() {
        if (editFlag === false) {
            setEditFlag(true);
        } else setEditFlag(false);
    }

    function addNewJob() {
        const newJobs = [...userInfo.jobs, {
            companyName: "Company Name",
            title: "Job Title",
            dates: "Start Date - End Date",
            duties: ["Responsibility 1", "Responsibility 2", "Responsibility 3"]
        }]

        setUserInfo({
            ...userInfo,
            jobs: newJobs
        })
    }

    function removeJob() {
        const newJobs = userInfo.jobs.slice(0, -1)

        setUserInfo({
            ...userInfo,
            jobs: newJobs
        })
    }

    function submitChanges() {
        if (editFlag === true) {
          setEditFlag(false)
        } else setEditFlag(true)
    }
    return (
        <section className="main-section-wrapper">
            <div className="heading-wrapper">
                <h3>Professional Experience</h3>
                {!editFlag && 
                    <button aria-label="edit button" type="button" className="edit-button" onClick={enableEdit}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                    </button>
                }
            </div>
            <div className="job-section-wrapper">
                {!editFlag ? (
                    userInfo.jobs.map((job, index) => (
                        <JobArticle key={index} jobIndex={index} companyName={job.companyName} title={job.title} dates={job.dates} duties={job.duties} userInfo={userInfo} setUserInfo={setUserInfo}/>
                    ))
                ) : (
                    userInfo.jobs.map((job, index) => (
                        <div key={index} className="editing-experience-wrapper">
                            <JobArticle jobIndex={index} companyName={job.companyName} title={job.title} dates={job.dates} duties={job.duties} userInfo={userInfo} setUserInfo={setUserInfo}/>
                        </div>
                    ))
                )}
            </div>
            {editFlag &&
                <div className="experience-buttons-wrapper">
                    <button type="button" className="add editing-button" onClick={addNewJob}>
                        Add Work History
                    </button>
                    <button type="button" className="remove editing-button" onClick={removeJob}>
                        Remove Work History
                    </button>
                    <button type="button" className="submit editing-button" onClick={submitChanges}>
                        Submit
                    </button>
                </div>
            }
        </section>
    )
}