import React, { useState } from 'react'

export default function TextForm (props) {
  const [textValue, settextValue] = useState('')
  // btn styles
  const btnColor = {
    backgroundColor: props.darkModeColor,
    color: props.darkModeColor==='white'?"black":"white",
    border: `1px solid ${props.darkModeColor==='white'?"black":"white"}`
  }


  // Event functions
  const textInputHandler = event => {
    settextValue(event.target.value)
  }
  const changeUpperCaseHandler = () => {
    settextValue(textValue.toUpperCase())
    props.showAlert('success', 'Changed To UpperCase')
  }
  const changeLowerCaseHandler = () => {
    settextValue(textValue.toLowerCase())
    props.showAlert('success', 'Changed To LowerCase')
  }
  const reverseTextHandler = () => {
    settextValue(
      textValue
        .split(' ')
        .reverse()
        .join(' ')
    )
    props.showAlert('success', 'Changed To Reverse Text')
  }
  const capitalizeTextHandler = () => {
    let newText = textValue
    let newArray = []
    newText = newText.split(' ')
    console.log(newText)
    for (let i = 0; i < newText.length; i++) {
      newArray.push(newText[i][0].toUpperCase() + newText[i].slice(1))
    }
    settextValue(newArray.join(' '))
    props.showAlert('success', 'Changed To Capitalize')
  }
  const removeSpaceHandler = () => {
    let reg = /( )+/g
    settextValue(textValue.replace(reg, ' '))
    props.showAlert('success', 'Extra spaces removed')
  }
  const parameterizingTextHandler = () => {
    settextValue(textValue.split(' ').join('-'))
    props.showAlert('success', 'Text parameterized')
  }
  const copyTextHandler=()=>{
    navigator.clipboard.writeText(textValue);
    props.showAlert("success","copied to clipboard")
  }
  const clearTextAreaHandler = () => {
    settextValue('')
  }

  return (
    <section id='textForm'>
      <section id='formContainer'>
        <div className='container my-5'>
          <h5 className='text-capitalize '>{props.heading}</h5>

          <div className='mb-3'>
            <textarea
              className={`form-control`}
              style={btnColor}
              id='exampleFormControlTextarea1'
              rows='8'
              value={textValue}
              onChange={textInputHandler}
            ></textarea>
          </div>
          <button
           disabled={textValue.length===0}
            className='btn'
            style={btnColor}
            onClick={changeUpperCaseHandler}
          >
            Convert To Uppercase
          </button>
          <button
           disabled={textValue.length===0}
            className='btn btn-primary mx-1  my-1'
            onClick={changeLowerCaseHandler}
            style={btnColor}
          >
            Convert To lowerCase
          </button>
          <button
           disabled={textValue.length===0}
            className='btn btn-danger mx-1  my-1'
            onClick={clearTextAreaHandler}
            style={btnColor}
          >
            Clear TextArea
          </button>
          <button
           disabled={textValue.length===0}
            className='btn btn-primary mx-1  my-1'
            style={btnColor}
            onClick={reverseTextHandler}
          >
            Reverse Text
          </button>
          <button
           disabled={textValue.length===0}
            className='btn btn-primary mx-1 my-1'
            style={btnColor}
            onClick={capitalizeTextHandler}
          >
            Capitalize Text
          </button>
          <button
           disabled={textValue.length===0}
            className='btn btn-primary mx-1  my-1'
            style={btnColor}
            onClick={removeSpaceHandler}
          >
            Remove Extra Space
          </button>
          <button
           disabled={textValue.length===0}
            className='btn btn-primary mx-1  my-1'
            style={btnColor}
            onClick={parameterizingTextHandler}
          >
            Parameterizing Text
          </button>
          <button
           disabled={textValue.length===0}
            className='btn btn-primary mx-1  my-1'
            style={btnColor}
            onClick={copyTextHandler}
          >
           Copy Text
          </button>
        </div>
      </section>
      <section
        id='formResult'
        className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}
      >
        <div className='container my-5'>
          <h1>Text Summary</h1>
          <p>
            Chars=<b>{textValue.length}</b> Words=
            <b>
              {textValue.split(/\s+/).filter(elem => elem.length !== 0).length}

            </b>
          </p>
          <p>
            <b>{(textValue.split(' ').filter(elem => elem.length !== 0).length) * 0.008}mins</b> time to read{' '}
          </p>
          {/* (Normally 125 words are read in 1 min so 1 word is read in 1/125 mins which is .008 so we divide number of words to 0.008) */}
          <h2>Preview</h2>
          <p>
            <b>
              {textValue.length > 0
                ? textValue
                : 'Nothing To Preview'}
            </b>
          </p>
        </div>
      </section>
    </section>
  )
}
