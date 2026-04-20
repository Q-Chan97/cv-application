import { useState } from "react"

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
            <div className="heading-wrapper">
                <h3>Skills</h3>
                {!editFlag &&
                    <button type="button" className="submit editing-button" onClick={submitChanges}>
                        Submit
                    </button>
                }
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
        </article>
    )
}