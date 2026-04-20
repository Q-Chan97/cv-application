import { Fragment, useState } from "react";

export default function JobArticle({jobIndex, companyName, title, dates, duties, userInfo, setUserInfo}) {
    const [editFlag, setEditFlag] = useState(false);

    function enableEdit() {
        if (editFlag === false) {
            setEditFlag(true);
        } else setEditFlag(false);
    }

    function handleCompanyNameChange(e) {
        const newJobs = userInfo.jobs.map((job, i) => (
            i === jobIndex ? {...job, companyName: e.target.value} : job
        ))

        setUserInfo({
            ...userInfo,
            jobs: newJobs
        })
    }

    function handleJobTitleChange(e) {
        const newJobs = userInfo.jobs.map((job, i) => (
            i === jobIndex ? {...job, title: e.target.value} : job
        ))

        setUserInfo({
            ...userInfo,
            jobs: newJobs
        })
    }

    function handleJobDatesChange(e) {
        const newJobs = userInfo.jobs.map((job, i) => (
            i === jobIndex ? {...job, dates: e.target.value} : job
        ))

        setUserInfo({
            ...userInfo,
            jobs: newJobs
        })
    }

    function handleJobDutiesChange(e, dutyIndex) { // Needs to loop through every job's duties to find matching indexes
        const newJobs = userInfo.jobs.map((job, i) => {
            if (i !== jobIndex) return job;

            const newDuties = job.duties.map((duty, j) => (
                j === dutyIndex ? e.target.value : duty
            ))

            return {...job, duties: newDuties}
        })

        setUserInfo({
            ...userInfo,
            jobs: newJobs
        })
    }

    function addNewListItem() {
        const newJobs = userInfo.jobs.map((job, index) => (
            index === jobIndex ? {...job, duties: [...job.duties, "New Responsibility"]} : job 
        ))

        setUserInfo({
            ...userInfo,
            jobs: newJobs
        })
    }

    function removeListItem() {
        const newJobs = userInfo.jobs.map((job, index) => (
            index === jobIndex ? {...job, duties: [...job.duties].slice(0, -1)} : job 
        ))

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

    return(
        <article className="job-wrapper">
            {!editFlag ? (
                <div>
                    <div className="heading-wrapper">
                        <h4>{companyName}</h4>
                        <button aria-label="edit button" type="button" className="edit-button" onClick={enableEdit}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                        </button>
                    </div>
                    <h5>{title}</h5>
                    <h5>{dates}</h5>
                    <ul>
                        {duties.map((duty) => (
                            <li key={duty}>{duty}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="editing">
                    <div className="job-editing-wrapper">
                        <label htmlFor="companyName">Company Name:</label>
                        <input
                            name="companyName"
                            id="companyName"
                            type="text"
                            className="job-duty-edit-field"
                            value={companyName}
                            onChange={handleCompanyNameChange}>
                        </input>
                    </div>
                    <div className="job-editing-wrapper">
                        <label htmlFor="jobTitle">Job Title:</label>
                        <input
                            name="jobTitle"
                            id="jobTitle"
                            type="text"
                            className="job-duty-edit-field"
                            value={title}
                            onChange={handleJobTitleChange}>
                        </input>
                    </div>
                    <div className="job-editing-wrapper">
                        <label htmlFor="jobDates">Dates Employed:</label>
                        <input
                            name="jobDates"
                            id="jobDates"
                            type="text"
                            className="job-duty-edit-field"
                            value={dates}
                            onChange={handleJobDatesChange}>
                        </input>
                    </div>
                    {duties.map((duty, index) => (
                        <div className="job-editing-wrapper" key={index}>
                        <label htmlFor={duty}>Work Responsibility:</label>
                        <input
                            name={duty}
                            id={duty}
                            type="text"
                            className="job-duty-edit-field"
                            value={duty}
                            onChange={(e) => handleJobDutiesChange(e, index)}>
                        </input>
                        </div>
                    ))}
                    <button type="button" className="add editing-button" onClick={addNewListItem}>
                        Add Responsibility
                    </button>
                    <button type="button" className="remove editing-button" onClick={removeListItem}>
                        Remove Responsibility
                    </button>
                    <button type="button" className="submit editing-button" onClick={submitChanges}>
                        Submit
                    </button>
                </div>
            )}
        </article>
    )
}