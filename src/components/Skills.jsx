import { Fragment, useState } from "react"

export default function Skills({userInfo, setUserInfo}) {
    const [editFlag, setEditFlag] = useState(false);

    function enableEdit() {
        if (editFlag === false) {
            setEditFlag(true);
        } else setEditFlag(false);
    }

    function updateSkills(e, index) { // Will return either the input value on change, or the skill
        const newSkills = userInfo.skills.map((skill, i) => {
            return i === index ? e.target.value : skill
        })

        setUserInfo({
            ...userInfo,
            skills: newSkills
        })
    }

    function addNewListItem() {
        const newSkills = [...userInfo.skills, "New Skill"];
        setUserInfo({
            ...userInfo,
            skills: newSkills
        })
    }

    function removeListItem() {
        const newSkills = [...userInfo.skills].slice(0, -1);
        setUserInfo({
            ...userInfo,
            skills: newSkills
        })
    }

    function submitChanges() {
        if (editFlag === true) {
          setEditFlag(false)
        } else setEditFlag(true)
    }

    return (
        <article className="article-wrapper">
            <>
            <div className="heading-wrapper">
                <h3>Skills</h3>
                {!editFlag ? (
                    <button aria-label="edit button" type="button" className="edit-button" onClick={enableEdit}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                    </button>
                ) : (<></>)}
            </div>
            <div className="editing">
                <ul>
                    {userInfo.skills.map((skill, index) => (
                        !editFlag ? (
                            <li key={skill}>{skill}</li>
                        ) : (
                            <div className="side-edit-field-wrapper" key={index}>
                                <label htmlFor={index}>Skill:</label>
                                <input
                                    name={index}
                                    id={index}
                                    type="text"
                                    onChange={(e) => updateSkills(e, index)}
                                    value={skill}>
                                </input>
                            </div>
                        )
                    ))}
                </ul>
                {editFlag &&
                    <button type="button" className="add editing-button" onClick={addNewListItem}>
                        Add Skill
                    </button>
                }
                {editFlag &&
                    <button type="button" className="remove editing-button" onClick={removeListItem}>
                        Remove Skill
                    </button>
                }
                {editFlag &&
                    <button type="button" className="submit editing-button" onClick={submitChanges}>
                        Submit
                    </button>
                }
            </div>
            </>
        </article>
    )
}