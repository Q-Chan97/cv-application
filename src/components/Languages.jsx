import { useState } from "react";

export default function Languages({userInfo, setUserInfo}) {
    const [editFlag, setEditFlag] = useState(false);

    function updateLanguages(e, index) {
        const newLanguages = userInfo.map((language, i) => {
            return i === index ?  e.target.value : language
        })

        setUserInfo({
            ...userInfo,
            languages: newLanguages
        })
    }

    function enableEdit() {
        if (editFlag === false) {
            setEditFlag(true);
        } else setEditFlag(false);
    }

    function addNewListItem() {
        const newLanguages = [...userInfo.languages, "New Language"];
        setUserInfo({
            ...userInfo,
            languages: newLanguages
        })
    }

    function removeListItem() {
        const newLanguages = [...userInfo.languages].slice(0, -1);
        setUserInfo({
            ...userInfo,
            languages: newLanguages
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
                <h3>Languages</h3>
                {!editFlag && 
                <button aria-label="edit button" type="button" className="edit-button" onClick={enableEdit}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                </button>}
            </div>
            <div className="editing">
                <ul>
                    {userInfo.languages.map((language, index) => (
                        !editFlag ? (
                            <li key={language}>{language}</li>
                        ) : (
                            <div className="side-edit-field-wrapper" key={index}>
                                <label htmlFor={index}>Language:</label>
                                <input
                                    name={index}
                                    id={index}
                                    type="text"
                                    onChange={(e) => updateLanguages(e, index)}
                                    value={language}>
                                </input>
                            </div>
                        )
                    ))}
                </ul>
                {editFlag &&
                    <button type="button" className="add editing-button" onClick={addNewListItem}>
                        Add Language
                    </button>
                }
                {editFlag &&
                    <button type="button" className="remove editing-button" onClick={removeListItem}>
                        Remove Language
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