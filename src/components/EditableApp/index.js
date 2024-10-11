import {Component} from 'react'

import './index.css'

class EditableApp extends Component {
  state = {isShow: false, userText: ''}

  onClickInput = event => {
    this.setState({
      userText: event.target.value,
    })
  }

  saveText = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  render() {
    const {isShow, userText} = this.state
    console.log(userText)

    return (
      <div className="app-container">
        <div className="editable-app-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {isShow === false ? (
              <div className="saved-container">
                <input
                  className="input"
                  type="text"
                  value={userText}
                  onChange={this.onClickInput}
                />
                <button
                  onClick={this.saveText}
                  className="save-btn"
                  type="button"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="saved-container">
                <p className="para">{userText}</p>
                <button
                  onClick={this.saveText}
                  className="edit-btn"
                  type="button"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableApp
