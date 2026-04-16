import { useState } from "react"

export default function General({userInfo, setUserInfo}) {
  const [editFlag, setEditFlag] = useState(false);

  function enableEdit() {
    if (editFlag === false) {
      setEditFlag(true);
    } else setEditFlag(false)
  }

  function handleNameChange(e) {
    setUserInfo({
      ...userInfo,
      name: e.target.value
    })
  }

  function handleTitleChange(e) {
    setUserInfo({
      ...userInfo,
      title: e.target.value
    })
  }

  function handlePhoneNumberChange(e) {
    setUserInfo({
      ...userInfo,
      phoneNumber: e.target.value
    })
  }

  function handleEmailChange(e) {
    setUserInfo({
      ...userInfo,
      email: e.target.value
    })
  }

  function handleLocationChange(e) {
    setUserInfo({
      ...userInfo,
      location: e.target.value
    })
  }

  function submitChanges() {
    if (editFlag === true) {
      setEditFlag(false)
    } else setEditFlag(true)
  }

  return (
      <>
        <div className="name-wrapper">
          {!editFlag ? (
            <>
              <h1>{userInfo.name}</h1>
              <h2>{userInfo.title}</h2>
              <button aria-label="edit button" type="button" className="header-edit-button" onClick={enableEdit}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="28px" fill="#FFFFFF"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
              </button>
            </>
          ) : (
            <div className="name-wrapper editing">
              <div className="edit-field-wrapper">
                <label htmlFor="name-input">Name:</label>
                <input
                  name="name-input"
                  id="name-input"
                  className="header-edit-field"
                  type="text"
                  onChange={handleNameChange}
                  value={userInfo.name}>
                </input>
              </div>
              <div className="edit-field-wrapper">
                <label htmlFor="title-input">Job Title:</label>
                <input
                  name="title-input"
                  id="title-input"
                  className="header-edit-field"
                  type="text"
                  onChange={handleTitleChange}
                  value={userInfo.title}>
                </input>
              </div>
              <button type="button" className="submit-button" onClick={submitChanges}>
                Submit
              </button>
            </div>
          )}
        </div>
        <div className="contact-wrapper">
          {!editFlag ? (
            <>
              <p>{userInfo.phoneNumber}</p>
              <p>{userInfo.email}</p>
              <p>{userInfo.location}</p>
            </>
          ) : (
            <>
              <div className="contact-wrapper editing">
                <div className="edit-field-wrapper">
                  <label htmlFor="phone-number-input">Phone Number:</label>
                  <input
                    name="phone-number-input"
                    id="phone-number-input"
                    className="header-edit-field"
                    type="text"
                    onChange={handlePhoneNumberChange}
                    value={userInfo.phoneNumber}>
                  </input>
                </div>
                <div className="edit-field-wrapper">
                  <label htmlFor="email-input">Email:</label>
                  <input
                    name="email-input"
                    id="email-input"
                    className="header-edit-field"
                    type="text"
                    onChange={handleEmailChange}
                    value={userInfo.email}>
                  </input>
                </div>
                <div className="edit-field-wrapper">
                  <label htmlFor="location-input">Location:</label>
                  <input
                    name="location-input"
                    id="location-input"
                    className="header-edit-field"
                    type="text"
                    onChange={handleLocationChange}
                    value={userInfo.location}>
                  </input>
                </div>
              </div>
            </>
          )}
        </div>
      </>
    )
}