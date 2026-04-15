import { useState } from "react"

export default function Education({userInfo, setUserInfo}) {
    const [editFlag, setEditFlag] = useState(false);

    function enableEdit() {
        if (editFlag === false) {
            setEditFlag(true);
        } else setEditFlag(false);
    }

    function handleDegreeChange(e) {
        setUserInfo({
            ...userInfo,
            degree: e.target.value
        })
    }

    function handleUniversityChange(e) {
        setUserInfo({
            ...userInfo,
            university: e.target.value
        })
    }

    function handleGradDateChange(e) {
        setUserInfo({
            ...userInfo,
            gradDate: e.target.value
        })
    }

    function submitChanges() {
        if (editFlag === true) {
          setEditFlag(false)
        } else setEditFlag(true)
      }

    return (
        <article className="article-wrapper">
            {!editFlag ? (
                <>
                <div className="heading-wrapper">
                    <h3>Education</h3>
                    <button aria-label="edit button" type="button" className="edit-button" onClick={enableEdit}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                    </button>
                </div>
                <p>{userInfo.degree}</p>
                <p>{userInfo.university}</p>
                <p>{userInfo.gradDate}</p>
                </>
            ) : (
                <>
                <div className="heading-wrapper">
                    <h3>Education</h3>
                </div>
                <div className="editing">
                    <div className="side-edit-field-wrapper">
                        <label for="degree-input">Degree:</label>
                        <input
                            name="degree-input"
                            id="degree-input"
                            className="side-edit-field"
                            type="text"
                            onChange={handleDegreeChange}
                            value={userInfo.degree}>
                        </input>
                    </div>
                    <div className="side-edit-field-wrapper">
                        <label for="university-input">University:</label>
                        <input
                            name="university-input"
                            id="university-input"
                            className="side-edit-field"
                            type="text"
                            onChange={handleUniversityChange}
                            value={userInfo.university}>
                        </input>
                    </div>
                    <div className="side-edit-field-wrapper">
                        <label for="grad-date-input">Graduation Date:</label>
                        <input
                            name="grad-date-input"
                            id="grad-date-input"
                            className="side-edit-field"
                            type="text"
                            onChange={handleGradDateChange}
                            value={userInfo.gradDate}>
                        </input>
                    </div>
                    <button type="button" className="submit-button" onClick={submitChanges}>
                        Submit
                    </button>
                </div>
                </>
            )}
        </article>
    )
}